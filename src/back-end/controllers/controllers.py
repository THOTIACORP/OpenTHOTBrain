# app/controllers.py
from flask import Blueprint

bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    # Código para a rota principal
    pass
