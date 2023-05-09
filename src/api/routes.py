"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Transaccion, Product
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
        token = create_access_token(identity = is_user_registered.id)     
        print(token)
        return jsonify({"access_token": token})
    else:
        return {"msg":"Contraseña incorreta"}, 415

#PRODUCTO POST
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
    new_product = Product(name=name, price=price, product_img=product_img, status=status)
    print(new_product)
    db.session.add(new_product)
    try:
        db.session.commit()
        return {"msg":"producto añadido con exito"}, 201
    except Exception as error:
        db.session.rollback()
        print(error)
        return "error", 500


#PRODUCTO GET
@api.route("/product", methods=["GET"])
def get_product():
    Productos=Product.query.all()
    return jsonify({"product":[product.serialize()for product in Productos]})

#POST TRANSACCIONES
@api.route("/transaccion", methods=["POST"])
def transaccion():
    body = request.json
    product_id = body.get("product_id",None)
    user_id = body.get("user_id",None)
    transaccion_status = body.get("transaccion_status",None)

    if product_id is None or user_id is None or transaccion_status is None:
        return {"error":"no se obtuvo la transaccion"},400
    product= Product.query.filter_by(id=product_id).one_or_none()
    if product is None:
        return {"error":"el producto no existe"},404  
        
    new_transaccion = Transaccion(product_id=product_id, user_id=user_id,transaccion_status=transaccion_status)
    db.session.add(new_transaccion) 
    try:
        db.session.commit()
        return {"msg":"transaccion registrada exitosamente"}

    except Exception as error:
        db.session.rollback()
        return jsonify({"error":error.args}),500    




@api.route("/transaccion")
def get_transaccion():
    body= request.json
    user_id=body.get("user_id",None)
    transacciones=Transaccion.query.filter_by(user_id=user_id).all()
    return jsonify({"transacciones":[transaccion.serialize()for transaccion in transacciones]})

    





