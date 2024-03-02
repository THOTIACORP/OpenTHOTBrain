from flask import Blueprint

controllers = Blueprint('main', __name__)

@controllers.route('/')
def index():
    # Código para a rota principal
    return 'Hello, world!'  # Exemplo de retorno para a rota principal
