from flask import Flask
from config import test_connection_db, connection_db

app = Flask(__name__)

# Registrar as rotas
app.register_blueprint(test_connection_db)
app.register_blueprint(connection_db)

if __name__ == "__main__":
    app.run(debug=True)
