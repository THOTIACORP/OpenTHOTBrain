from sqlalchemy import create_engine, MetaData, Table, Column, Integer
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
        print("Conexão com o banco de dados acontecendo")

        # Conectar ao banco de dados
        engine = create_engine(db_url)
        conn = engine.connect()

        # Usar reflexão para obter as informações das tabelas no banco de dados
        metadata = MetaData()
        metadata.reflect(engine)

        # Criar modelos dinamicamente
        modelos = {}
        for table_name, table in metadata.tables.items():
            # Definir o mapeamento de cada tabela para uma classe
            class_name = table_name.capitalize()
            class_attrs = {'__tablename__': table_name, '__table__': table}
            # Adicionar uma coluna 'id' como chave primária se não existir uma chave primária definida
            if not any(column.primary_key for column in table.columns):
                class_attrs['id'] = Column(Integer, primary_key=True)
            
            # Criar a classe e adicioná-la ao dicionário de modelos
            new_class = type(class_name, (Base,), class_attrs)
            modelos[table_name] = new_class

        # Imprimir informações sobre as tabelas e suas colunas
        print("Tabelas e suas colunas:")
        for table_name, model in modelos.items():
            print(f"Tabela: {table_name}")
            for column in model.__table__.columns:
                print(f" - Coluna: {column.name}")

        return conn, modelos

    except Exception as e:
        print("Erro ao conectar ao banco de dados:", e)
        return None, None

def fechar_conexao(conn):
    try:
        conn.close()
        print("Conexão com o banco de dados fechada.")
    except Exception as e:
        print("Erro ao fechar conexão:", e)
