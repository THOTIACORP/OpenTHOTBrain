from flask import Blueprint, jsonify, request
from ..main.connection import connection, fechar_conexao

# Criar um blueprint para as rotas de conexão do banco de dados
connection_db = Blueprint('connection_db', __name__)

@connection_db.route('/connection_db', methods=['POST', 'OPTIONS'])
def connection_db_route():
    # Verificar se a solicitação é uma pré-solicitação OPTIONS (para CORS)
    if request.method == 'OPTIONS':
        return jsonify(), 200

    # Receber os dados de conexão do JSON da solicitação
    dados_conexao = request.json
    print("Dados de conexão recebidos:", dados_conexao)  # Adicionando comando para imprimir os dados recebidos
    if not dados_conexao:
        return jsonify({'error': 'Dados de conexão não fornecidos'}), 400

    # Definir a variável de conexão como None fora do bloco try
    conn = None
    
    try:
        # Criar a conexão com o banco de dados e obter os modelos
        conn, modelos = connection(dados_conexao)

        # Montar a resposta com os modelos criados
        response_data = {'status': 'success', 'modelos': modelos}
        
        # Criar a resposta
        response = jsonify(response_data)
        
        # Adicionar cabeçalhos CORS à resposta
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3003')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
        response.headers.add('Access-Control-Allow-Credentials', 'true')

        # Retornar a resposta
        return response, 200

    except Exception as e:
        # Em caso de erro, retornar uma resposta de erro com status 500
        return jsonify({'error': str(e)}), 500

    finally:
        # Fechar a conexão com o banco de dados, se estiver aberta
        if conn:
            fechar_conexao(conn)
