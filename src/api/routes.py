"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

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
    
    email = body.get('email', None)
    password = body.get('password', None) 
    pay = body.get('pay',None)
    if email is None or password is None or pay is None :
        return{"error": "todos los datos requeridos"}, 400

    encripted_password = generate_password_hash(password)
    
    new_user = User(email=email, password=encripted_password,pay=pay )
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
    print(body)
    #validacion de contraseña
    if check_password_hash(is_user_registered.password, password):      
        token = create_access_token({"email": is_user_registered.email})     
        print(token)
        return jsonify({"access_token": token})
    else:
        return {"msg":"Contraseña incorreta"}, 415

#PRODUCTO POST
#product_img = body.get ("img", None)
@api.route("/Product", methods=["POST"])
def product():
    body = request.json
    name = body.get("name", None)
    price = body.get ("price", None)
    status = body.get ("status", None)

    if name is None or price is None or status is None:
        return{"error": "todos los datos requeridos"}, 460

    new_product = product( name=name, price=price, status=status)
    db.session.add(new_product)
    try:
        db.session.commit()
        return {"msg":"producto añadido con exito"}
    except Exception as error:
        db.session.rollback()
        return jsonify({"error": error}), 470

        





