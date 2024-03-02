from flask import Flask
from config import test_connection_db, connection_db

app = Flask(__name__)

# Registrar as rotas
app.register_blueprint(test_connection_db)
app.register_blueprint(connection_db)


if __name__ == "__main__":
    # Roda o aplicativo em modo de depuração na porta 5000
    app.run(debug=True, host='0.0.0.0', port=5000)