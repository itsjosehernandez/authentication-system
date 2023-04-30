from flask_sqlalchemy import SQLAlchemy
# from datetime import datetime    <--- si decidimos poner la fecha de creacion del producto/listado

db = SQLAlchemy()  # <----- appname

# app = ourname(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///dbname'



#create DB models

class User(db.Model):
    # __tablename__ = 'USER'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
class product(db.Model):
    # __tablename__ = 'Product'   
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200),unique=True, nullable=False)
    # date_created = db/Column(db.DateTime, default=datetime.utcnow)  <--- saving the date of creation in the DDBB
    price = db.Column(db.Integer,unique=True , nullable=False)
    product_img = db.Column(db.String(200),unique=True ,nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))
    #user = db.relationship("user",backref=backref("user",uselist=False))
    status = db.Column(db.String(200),unique=True,nullable=False)

    


    # create a funcition  to return a string when we add something
    def __repr__(self):
        return '<Name %r>' % self.id



class transaccion(db.model):
    id = db.column(db.Integer,primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(product.id))
    # product = db.relationship("product",backref=backref("product",uselist=False))
    product_img = db.Column(db.Integer, db.ForeignKey(product.product_img))
    # img = db.relationship("product",backref=backref("product",uselist=False))
    product_price = db.Column(db.Integer, db.ForeignKey(product.price))
    # price = db.relationship("product",backref=backref("product",uselist=False))
    user_pay = db.Column(db.String(200),db.ForeignKey(user.pay))
    # pay = db.relationship("user",backref=backref("user",uselist=False))
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))
    #user = db.relationship("user",backref=backref("user",uselist=False))
    transaccion_status = db.Column(db.String(200),unique=True,nullable=False)

     # create a funcition  to return a string when we add something
    def __repr__(self):
        return '<Name %r>' % self.id





