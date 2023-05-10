import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import wii from "../../img/imgWii.jpg";
import React from "react";
import Button from "react-bootstrap/Button";
function Product({product}) {
  return (
    // <Row xs={1} md={3} lg={5} className="g-4 px-5">
      
        <Col key={product.id}>
          <Card>
            <Card.Img variant="top" src={product.product_img} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.status}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Diegoarraez10@hotmail.com
              </Card.Subtitle>
              <Card.Text>
                <strong>Price: </strong>{product.price}
              </Card.Text>
              <Row xs={1} md={1} lg={1} className="g-3">
                <Button variant="primary">Add to cart</Button>
                <Button variant="primary">Details</Button>
                <Button variant="primary">Buy now!</Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      
    // </Row>
  );
}

export default Product;
