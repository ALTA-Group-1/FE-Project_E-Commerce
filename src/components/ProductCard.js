import React from 'react';
import '../style/ProductCard.css';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
  const [cookies, setCookies] = useCookies()
  const navigate = useNavigate()
  var axios = require('axios');

  const data = {
    productID: props.id,
  };
  const config = {
    headers: { Authorization: `Bearer ${props.token}` },
  };
  const url = 'http://13.57.49.65/carts';

  const addToCart = () => {
    axios
      .post(url, data, config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
    console.log(props.token);
  }

  const increment = async (e) => {
    var config = {
      method: 'put',
      url: `http://13.57.49.65/carts/${e}?update=increment`,
      headers: {
        'Authorization': `Bearer ${cookies.token}`
      }
    };

    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }


  const decrement = async (e) => {
    var config = {
      method: 'put',
      url: `http://13.57.49.65/carts/${e}?update=decrement`,
      headers: {
        'Authorization': `Bearer ${cookies.token}`
      }
    };

    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  const remove = async (e) => {
    var config = {
      method: 'delete',
      url: `http://13.57.49.65/carts/${e}`,
      headers: {
        'Authorization': `Bearer ${cookies.token}`
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }

  return (
    <div>
      <div className="containerCard">
        <Card.Img variant="top" className="imagepc" src={props.image} onClick={props.detail} />
        <a href="" className="title">
          <Card.Title className="title" onClick={props.detail}>
            {props.name}
          </Card.Title>
        </a>
        <p>Rp {props.price}</p>
        <p>Quantity = {props.qty}</p>
        {
          props.cart == undefined ? <Button variant="info" className="btnProduct" onClick={() => addToCart()}>
            Add To Cart
          </Button> : <>
            <div style={{ display: "flex" }}>
              <Button variant="info" className="btnProduct" onClick={() => increment(props.id)}>
                +
              </Button>
              <Button variant="info" className="btnProduct" onClick={() => decrement(props.id)}>
                -
              </Button>
            </div>
            <Button variant="info" className="btnProduct" onClick={() => remove(props.id)}>
              Remove
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
