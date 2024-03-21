import os
import shutil
import glob
from flask import Flask
from flask_cors import CORS
from config import connection_db, test_connection_db
from controllers import controllers_db
from services.correlation.correlation_bp import correlation_bp


# Função para limpar arquivos .pyc recursivamente em todos os diretórios
def limpar_pyc():
    for file in glob.glob('**/*.pyc', recursive=True):
        os.remove(file)

# Função para remover diretórios __pycache__ recursivamente em todos os diretórios
def remover_pycache():
    for root, dirs, _ in os.walk('.', topdown=False):
        for name in dirs:
            if name == '__pycache__':
                shutil.rmtree(os.path.join(root, name))

# Limpar arquivos .pyc antes de iniciar o aplicativo
limpar_pyc()
remover_pycache()

app = Flask(__name__)
CORS(app, supports_credentials=True)
# Registrar as rotas

app.register_blueprint(connection_db)
app.register_blueprint(test_connection_db)
app.register_blueprint(controllers_db)
app.register_blueprint(correlation_bp)

if __name__ == "__main__":
    # Roda o aplicativo em modo de depuração na porta 5000
    app.run(debug=True, host='0.0.0.0', port=5000)
