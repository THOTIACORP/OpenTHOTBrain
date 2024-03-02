from flask import Flask
from .config.test.test_connection_db import test_connection_db

app = Flask(__name__)

# Registrar as rotas
app.register_blueprint(test_connection_db)

if __name__ == "__main__":
    app.run(debug=True)
