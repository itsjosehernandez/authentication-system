import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import wii from "../../img/imgWii.jpg";
import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/productCard.css"




function Product({product}) {
  const {store,actions}= useContext(Context)
  return (
    <Col lg={3} md={3} xs={12}  key={product.id}>
      <Card className= "my-3 cardgrid">
        <Card.Img variant="top" src={product.product_img} className="card-img-fixed" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.status}</Card.Text>
          <Card.Text>
            <strong>Price: </strong>{product.price}
          </Card.Text>
          <Row xs={1} md={1} lg={1} className="g-3">
            <Link to={`/productDetails/${product.id}`} variant="primary">Details</Link>
            <Button variant="primary" onClick={()=>actions.handleTransaccion(product.id, product.status)}>Buy now!</Button>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;
