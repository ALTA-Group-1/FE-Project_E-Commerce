import React from 'react';
import '../style/ProductCard.css';
import { Card, Button } from 'react-bootstrap';

const ProductCard = () => {
  return (
    <div className="containerCard">
          <Card.Img variant="top" className="image" src="" />
        <a href="" className="title">
          <Card.Title className="title">ABCD</Card.Title>
        </a>
        <p>Rp 123</p>
        <Button variant="dark" className="btnProduct">
          Add To Cart
        </Button>
    </div>
  );
};

export default ProductCard;
