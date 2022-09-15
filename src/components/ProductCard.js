import React from 'react';
import '../style/ProductCard.css';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const ProductCard = (props) => {
  const cookies = useCookies()
  var axios = require('axios');

  const data = {
    "productID": props.id
  }
  const config = {
    headers: { Authorization: `Bearer ${props.token}` },
  };
  const url = "http://13.57.49.65/carts"

  const addToCart = () => {
    axios
      .post(url,data,config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
    console.log(props.token);
  }

  return (
    <div>
      <div className="containerCard">
        <Card.Img variant="top" className="image" src={props.image} />
        <a href="" className="title">
          <Card.Title className="title">{props.name}</Card.Title>
        </a>
        <p>Rp {props.price}</p>
        {
          props.cart == undefined? <Button variant="info" className="btnProduct" onClick={() => addToCart()}>
          Add To Cart
        </Button> : null
        }
      </div>
    </div>
  );
};

export default ProductCard;
