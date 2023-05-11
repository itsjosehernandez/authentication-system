"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Transaccion, Product
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from sqlalchemy.sql.functions import ReturnTypeFromArgs
import re

class unaccent(ReturnTypeFromArgs):
    pass

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
    email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    body = request.json
    
    email = body.get('email', None)
    password = body.get('password', None) 
    pay = body.get('pay',None)
    if email is None or password is None or pay is None :
        return{"error": "todos los datos requeridos"}, 400

    if not re.match(email_pattern,email):
        return jsonify({"error": "email no es valido"}), 400

    if not re.match(email_pattern,pay):
        return jsonify({"error": "pay no es valido"}), 400

    encripted_password = generate_password_hash(password)
    
    new_user = User(email=email, password=encripted_password, pay=pay)
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
        token = create_access_token(identity = is_user_registered.id)     
        print(token)
        return jsonify({"access_token": token})
    else:
        return {"msg":"Contraseña incorreta"}, 415

#CREA UN PRODUCTO POST
@api.route("/product", methods=["POST"])
@jwt_required()
def create_product():
    body = request.json
    name = body.get("name", None)
    price = body.get ("price", None)
    product_img = body.get ("product_img", None)
    status = body.get ("status", None)
    is_user_registered = get_jwt_identity()
    user = User.query.get(is_user_registered)
    if user is None:
        return{"error": "no hemos encontrado su User_id"}
    if name is None or price is None or product_img is None or status is None:
        return{"error": "todos los datos requeridos"}, 460
    new_product = Product(name=name, price=price, product_img=product_img, status=status, user_id=user.id)
    print(new_product)
    db.session.add(new_product)
    try:
        db.session.commit()
        return {"msg":"producto añadido con exito"}, 201
    except Exception as error:
        db.session.rollback()
        print(error)
        return "error", 500


#RETORNA TODOS LOS PRODUCTO GET
@api.route("/products", methods=["GET"])
def get_products():
    Productos=Product.query.all()
    return jsonify({"products":[product.serialize()for product in Productos]})

@api.route("/product/<int:id>", methods=["GET"])
def get_product(id):
    Productos=Product.query.filter_by(id=id).first()
    return jsonify(Productos.serialize())

#CREA UNA TRANSACCION
@api.route("/transaccion", methods=["POST"])
@jwt_required()
def transaccion():
    body = request.json
    product_id = body.get("product_id",None)
    transaccion_status = body.get("transaccion_status",None)
    is_user_registered = get_jwt_identity()
    user = User.query.get(is_user_registered)
    if user is None:
        return{"error": "no hemos encontrado su User_id"}

    if product_id is None or transaccion_status is None:
        return {"error":"no se obtuvo la transaccion"},400
    product= Product.query.filter_by(id=product_id).one_or_none()
    if product is None:
        return {"error":"el producto no existe"},404  
        
    new_transaccion = Transaccion(product_id=product_id, user_id=user.id,transaccion_status=transaccion_status)
    db.session.add(new_transaccion) 
    try:
        db.session.commit()
        return {"msg":"transaccion registrada exitosamente"}

    except Exception as error:
        db.session.rollback()
        return jsonify({"error":error.args}),500    



#RETORNA LAS TRANSACCIONES DEL USUARIO GET
@api.route("/transaccion",  methods=["GET"])
@jwt_required()
def get_transaccion():
    is_user_registered = get_jwt_identity()
    user = User.query.get(is_user_registered)
    if user is None:
        return{"error": "no hemos encontrado su User_id"}
    transacciones=Transaccion.query.filter_by(user_id=user.id).all()
    
    
    return jsonify({"transacciones":[transaccion.serialize()for transaccion in transacciones]})

# RUTA PARA BUSCAR PRODUCTOS
@api.route('/search', methods=['POST'])
def handle_filter_services():
    name=request.json.get("name", None)
    products = Product.query.filter((unaccent(Product.name).ilike("%"+name+"%"))).all()
    response= []
    for product in products:
        response.append(product.serialize())
    print(response)
    if len(response) == 0:
        return jsonify({"message" : "not found"}), 404
    if products is not None:
        return jsonify(response),200



