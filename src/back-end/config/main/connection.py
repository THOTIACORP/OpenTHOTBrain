from sqlalchemy import create_engine, MetaData, Table, Column, Integer
from sqlalchemy.ext.declarative import declarative_base
from flask import jsonify

Base = declarative_base()

def connection(dados_conexao):
    try:
        dialect = dados_conexao.get('dialect')
        host = dados_conexao.get('host')
        port = dados_conexao.get('port')
        database = dados_conexao.get('database')
        user = dados_conexao.get('user') 
        password = dados_conexao.get('password')

        # Criar a URL de conexão com base nos dados recebidos
        db_url = f"{dialect}://{user}:{password}@{host}:{port}/{database}"
        print("Conexão com o banco de dados acontecendo")

        # Conectar ao banco de dados
        engine = create_engine(db_url)
        conn = engine.connect()

        # Usar reflexão para obter as informações das tabelas no banco de dados
        metadata = MetaData()
        metadata.reflect(engine)

        # Criar um dicionário para armazenar as informações das tabelas e colunas
        tabelas_colunas = {}
        for table_name, table in metadata.tables.items():
            # Obter os nomes das colunas da tabela atual
            colunas = [column.name for column in table.columns]
            # Adicionar as informações da tabela ao dicionário
            tabelas_colunas[table_name] = colunas

        # Criar a resposta com as informações das tabelas e colunas
        response_data = {'status': 'success', 'tabelas_colunas': tabelas_colunas}
        response = jsonify(response_data)

        return conn, response

    except Exception as e:
        print("Erro ao conectar ao banco de dados:", e)
        return None, None

def fechar_conexao(conn):
    try:
        conn.close()
        print("Conexão com o banco de dados fechada.")
    except Exception as e:
        print("Erro ao fechar conexão:", e)
