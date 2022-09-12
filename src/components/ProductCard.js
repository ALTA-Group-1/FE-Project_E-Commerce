import React from 'react';
import '../style/ProductCard.css';
import { Card, Button } from 'react-bootstrap';

const ProductCard = () => {
  return (
    <div className="containerCard">
      <Card className="card">
        <a href="">
          <Card.Img variant="top" className="image" src={props.src} onClick={props.clickDetail} />
        </a>
        <Card.Body className="cardBody">
          <a href="" className="title">
            <Card.Title onClick={props.clickDetail}>{props.title}</Card.Title>
          </a>
          <Button variant="dark" className="btn" onClick={props.fav}>
            Favorite <AiOutlineStar />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
