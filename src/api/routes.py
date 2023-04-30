"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello!"
    }

    return jsonify(response_body), 200
# Registro de Usuario
@api.route('/registro', methods=['POST'])
def registro():
    body = request.json
    id = body.get('id', None)
    email = body.get('email', None)
    password = body.get('password', None) 
    if email is None or password is None:
        return{"error": "todos los datos requeridos"}, 400

    encripted_password = generate_password_hash(password)
    
    new_user = User(id=id, email=email, password=encripted_password, is_active=True)
    db.session.add(new_user)
    try:
        db.session.commit()
        return {"msg":"usuario creado con exito"}
    except Exception as error:
        db.session.rollback()
        return jsonify({"error": error}), 450

# login de Usuario
@api.route("/login", methods=["POST"])
def login():
    body = request.json
    email = body.get("email", None)
    password = body.get ("password", None)
    if email is None or password is None:
        return{"error": "todos los datos requeridos"}, 400

    #flitro de usuario
    is_user_registered = User.query.filter_by(email=email).first()


    if not is_user_registered:
        return {"error": "No existe Usuario con esas credenciales"}, 410

    #validacion de contraseña
    if check_password_hash(password, is_user_registered.password):
        return {"msg":"Contraseña correta"},430
    else:
        return {"msg":"Contraseña incorreta"}, 415



