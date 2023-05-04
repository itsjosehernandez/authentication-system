import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function ProductCard({ image, name, price, seller, description }) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{seller}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <Card.Text><strong>Price: </strong>\${price}</Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default ProductCard;
 