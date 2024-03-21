# Importe os módulos necessários
from flask import Blueprint, jsonify, request
from config import connection, fechar_conexao
import pandas as pd

# Crie um blueprint para a rota
correlation_bp = Blueprint('correlation_bp', __name__)

# Defina a função para calcular a correlação
def calculate_correlation(df, method='pearson'):
    # Remova colunas duplicadas do DataFrame
    df = df.loc[:, ~df.columns.duplicated()]

    # Procure por colunas com dados ausentes e remova-as
    columns_with_data = df.columns[df.notna().any()].tolist()
    columns_without_data = list(set(df.columns) - set(columns_with_data))
    df = df[columns_with_data]

    # Imprima as colunas removidas
    print(f"Colunas removidas devido a dados ausentes: {columns_without_data}")

    # Remova colunas de texto (não numéricas) do DataFrame
    numeric_columns = df.select_dtypes(include='number').columns.tolist()
    df = df[numeric_columns]

    correlation_matrix = df.corr(method=method)
    return correlation_matrix

# Defina a rota para calcular as correlações
@correlation_bp.route('/correlation', methods=['POST'])
def correlation():
    # Verifique se a solicitação é uma solicitação de pré-voo OPTIONS (para CORS)
    if request.method == 'OPTIONS':
        return jsonify(), 200

    # Receba os dados de conexão da solicitação JSON
    dados_conexao = request.json
    if not dados_conexao:
        return jsonify({'error': 'Connection data not provided'}), 400

    # Inicialize a variável de conexão fora do bloco try
    conn = None
    
    try:
        # Estabeleça a conexão com o banco de dados e recupere as informações da tabela
        conn, response = connection(dados_conexao)
        if not conn:
            return response, 500

        # Obtenha as informações das tabelas e colunas da resposta
        tables_columns = response.get_json().get('tabelas_colunas')
        
        # Inicialize um dicionário para armazenar as matrizes de correlação
        correlation = {}

        # Itere sobre cada tabela e execute a análise de correlação
        for table_name, columns in tables_columns.items():
            # Supondo que cada tabela tenha uma chave primária 'id'
            query = f'SELECT {", ".join(columns)}, id FROM {table_name};'
            df = pd.read_sql_query(query, conn)

            # Imprima as colunas originais
            print(f"Colunas originais para a tabela {table_name}: {df.columns.tolist()}")

            # Calcule a matriz de correlação de Pearson para a tabela
            pearson_correlation = calculate_correlation(df, method='pearson')
            print(f"Correlação de Pearson para a tabela {table_name}:")
            print(pearson_correlation)

            # Calcule a matriz de correlação de Spearman para a tabela
            spearman_correlation = calculate_correlation(df, method='spearman')
            print(f"Correlação de Spearman para a tabela {table_name}:")
            print(spearman_correlation)

            # Adicione as matrizes de correlação ao dicionário de correlações
            correlation[table_name] = {
                'pearson': pearson_correlation.to_dict(),
                'spearman': spearman_correlation.to_dict()
            }

        # Retorne as correlações para cada tabela
        return jsonify({'correlation': correlation}), 200

    except Exception as e:
        # Retorne uma resposta de erro com o código de status 500 em caso de erro
        return jsonify({'error': str(e)}), 500

    finally:
        # Feche a conexão com o banco de dados se estiver aberta
        if conn:
            fechar_conexao(conn)

# Retorne o blueprint no final da função que define o blueprint
