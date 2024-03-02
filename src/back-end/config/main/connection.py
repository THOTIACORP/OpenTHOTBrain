from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

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
        
        # Conectar ao banco de dados
        engine = create_engine(db_url)
        conn = engine.connect()

        # Usar reflexão para obter as informações das tabelas no banco de dados
        metadata = MetaData()
        metadata.reflect(bind=engine)

        # Criar modelos dinamicamente
        modelos = {}
        for table_name in metadata.tables.keys():
            # Define a classe para o modelo
            class_name = table_name.capitalize()
            # Obtém a tabela do metadata
            table = metadata.tables[table_name]
            # Define o modelo baseado na tabela atual
            model = type(class_name, (Base, ), {'__tablename__': table_name})
            # Adiciona as colunas da tabela como atributos ao modelo
            for column in table.columns:
                setattr(model, column.name, column)
            modelos[table_name] = model

        return conn, modelos

    except Exception as e:
        raise e

def fechar_conexao(conn):
    try:
        conn.close()
        print("Conexão com o banco de dados fechada.")

    except Exception as e:
        raise e
