import React from 'react';
import '../style/ProductCard.css';
import { Card, Button } from 'react-bootstrap';

const ProductCard = (props) => {
  return (
    <div>
      <div className="containerCard">
        <Card.Img variant="top" className="image" src={props.image} />
        <a href="" className="title">
          <Card.Title className="title">{props.name}</Card.Title>
        </a>
        <p>Rp {props.price}</p>
        <Button variant="info" className="btnProduct">
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
