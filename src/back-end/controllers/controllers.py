# controllers/controllers.py
from flask import Blueprint

controllers_db = Blueprint('controllers', __name__)

@controllers_db.route('/some_route')
def some_route():
    return 'Hello from some_route!'
