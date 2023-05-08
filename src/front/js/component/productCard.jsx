import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import React from "react";
import preview from "../../img/imgWii.jpg";

function ProductCard() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={preview} />
        <Card.Body>
          <Card.Title>nintendo Wii</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Diegoarraez10@hotmail.com</Card.Subtitle>
          <Card.Text>NUEVO EN SU CAJA</Card.Text>
          container-fluid
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default ProductCard;
 