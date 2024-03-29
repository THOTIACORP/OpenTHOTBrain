from flask import Blueprint, request, jsonify
from ..main.connection import connection, fechar_conexao

test_connection_db = Blueprint('test_connection', __name__)

@test_connection_db.route('/test_connection', methods=['POST'])
def test_connection():
    dados_conexao = request.json
    if not dados_conexao:
        return jsonify({'error': 'Dados de conexão não fornecidos'}), 400
    
    try:
        conn, modelos = connection(dados_conexao)

        # Exemplo de uso dos modelos
        info_modelos = {}
        for table_name, model in modelos.items():
            info_modelos[table_name] = {
                'modelo': model.__name__,
                'colunas': [column.name for column in model.__table__.columns]
            }
        
        return jsonify({'status': 'success', 'modelos': info_modelos})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

    finally:
        if conn:
            fechar_conexao(conn)
