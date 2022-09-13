import React from 'react';
import '../style/Detail.css';
import Navbar from '../components/Navbar';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Detail = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <Container className="containerdetail">
            <Row className="row">
              <Col md={{ span: 6, offset: 0 }} className="cold1">
                <Card.Img variant="top" className="imgd" src="https://images.tokopedia.net/img/cache/300-square/product-1/2020/9/2/48125333/48125333_eb395cfa-025e-4c35-b52e-bb128514db19_700_700.webp?ect=4g" alt="gambar" />
              </Col>
              <Col md={{ span: 6, offset: 0 }} className="cold2">
                <h4>Product</h4>
                <p>Rp 123</p>
                <p>Quantity</p>
                <h6>Descripton Product</h6>
                <p>adjaskaa aaaaaaaaa aaaaaaaaaaaaaaaaajhf</p>
                <Button variant="info" className="btn1">
                  Add To Cart
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Detail;
