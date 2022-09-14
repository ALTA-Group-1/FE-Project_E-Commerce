import React from 'react';
import '../style/Cart.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Cart = () => {
  const navigate = useNavigate();
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
        <div>
          <Container className="containercart2">
            <Row className="row">
              <Col md={{ span: 5, offset: 0 }} className="colcart1">
                <Card.Img variant="top" className="imgcart" src="https://images.tokopedia.net/img/cache/300-square/product-1/2020/9/2/48125333/48125333_eb395cfa-025e-4c35-b52e-bb128514db19_700_700.webp?ect=4g" alt="gambar" />
              </Col>
              <Col md={{ span: 4, offset: 0 }} className="colcart2">
                <h4>Product</h4>
                <p>Rp 123</p>
              </Col>
              <Col md={{ span: 3, offset: 0 }} className="colcart3">
                <p>Qty</p>
                <p>Rp 123</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
