import React from 'react';
import '../style/HistoryPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const History = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='bodyhistory'>
        <Navbar />
        <Container className="containerhist1">
          <Row className="row">
            <Col>
              <h1>Order History</h1>
            </Col>
          </Row>
        </Container>
        <div>
          <Container className="containerhist2">
            <Row className="row">
              <Col md={{ span: 6, offset: 0 }} className="col1">
                <Card.Img variant="top" className="img" src="https://images.tokopedia.net/img/cache/300-square/product-1/2020/9/2/48125333/48125333_eb395cfa-025e-4c35-b52e-bb128514db19_700_700.webp?ect=4g" alt="gambar" />
              </Col>
              <Col md={{ span: 6, offset: 0 }} className="col2">
                <h4>Product</h4>
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

export default History;
