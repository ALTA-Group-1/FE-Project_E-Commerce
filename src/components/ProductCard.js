import React from 'react';
import '../style/ProductCard.css';
import { Card, Button } from 'react-bootstrap';

const ProductCard = () => {
  return (
    <div>
      <div className="containerCard">
        <Card.Img variant="top" className="image" src="https://images.tokopedia.net/img/cache/300-square/product-1/2020/9/2/48125333/48125333_eb395cfa-025e-4c35-b52e-bb128514db19_700_700.webp?ect=4g" />
        <a href="" className="title">
          <Card.Title className="title">ABCD</Card.Title>
        </a>
        <p>Rp 123</p>
        <Button variant="info" className="btnProduct">
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
