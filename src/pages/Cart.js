import React from 'react';
import '../style/Cart.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Cart = () => {
  const [cookies, setCookies] = useCookies()
  const navigate = useNavigate();
  const [cart, setCart] = useState()
  console.log(cookies.token);
  const config = {
    headers: { Authorization: `Bearer ${cookies.token}` },
  };
  const urlCart = 'http://13.57.49.65/carts';

  const getCart = async () => {
    await axios
      .get(urlCart, config)
      .then((response) => {
        setCart(response.data.data)
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    getCart()
  }, [])


  return (
    <div>
      <div className='bodycart'>
        <Navbar />
        <Container className="containercart1">
          <Row className="row">
            <Col>
              <h1>Shopping Cart</h1>
            </Col>
          </Row>
        </Container>
        <div className='containerdb'>
          {
            cart == undefined ?
              <>
              </> :
              <>
                {
                  cart.map((item) => {
                    return (
                      <ProductCard image={item.images} name={item.name} price={item.price} id={item.id} token={cookies.token} cart={"y"}/>
                    )
                  })
                }</>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
