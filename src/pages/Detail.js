import React from 'react';
import '../style/Detail.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { withRouter } from '../withRouter';
import { useCookies } from 'react-cookie';

const Detail = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const cookies = useCookies();
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
  };

  return (
    <div>
      <div className="bodydetail">
        <Navbar />
        <div>
          <Container className="containerdetail">
            <Row className="row">
              <Col md={{ span: 6, offset: 0 }} className="cold1">
                <Card.Img variant="top" className="imgd" src={location.state.image} alt={location.state.name} />
              </Col>
              <Col md={{ span: 6, offset: 0 }} className="cold2">
                <h4>{location.state.name}</h4>
                <p>Rp {location.state.price}</p>
                <h6>Descripton Product</h6>
                <p>{location.state.description}</p>
                <Button variant="info" className="btn1" onClick={() => addToCart()}>
                  Add To Cart
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(Detail);
