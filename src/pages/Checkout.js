import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import '../style/Checkout.css';

const Checkout = () => {
        const [validated, setValidated] = useState(false);
      
        const handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
      
          setValidated(true);
        };

  return (
    <div style={{padding: "0px 0px 90px 0px"}}>
        <div>
            <NavBar />
        </div>
        <div style={{padding: "30px"}}>
            <Container>
                <h4>Shipping Address</h4>
            </Container>
        </div>
        <div>
            <Container>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="10" controlId="validationCustom01">
                            <Form.Label>Street</Form.Label>
                            <Form.Control type="text" placeholder="Street" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid street.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="10" controlId="validationCustom02">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="10" controlId="validationCustom03">
                            <Form.Label>State / Province</Form.Label>
                            <Form.Control type="text" placeholder="State / Province" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state / Province.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="10" controlId="validationCustom04">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control type="text" placeholder="Zip Code" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        </div>
        <div>
            <Container>
                <h4>Credit Card</h4>
            </Container>    
        </div>
        <div>
            <Container>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="10" controlId="validationCustom05">
                            <Form.Label>Visa</Form.Label>
                            <Form.Control type="text" placeholder="Visa" required />
                        </Form.Group>
                        <Form.Group as={Col} md="10" controlId="validationCustom06">
                            <Form.Label>Name On Card</Form.Label>
                            <Form.Control type="text" placeholder="Name On Card" required />
                        </Form.Group>
                        <Form.Group as={Col} md="5" controlId="validationCustom07">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control type="text" placeholder="Card Number" required />
                        </Form.Group>
                        <Form.Group as={Col} md="5" controlId="validationCustom08">
                            <Form.Label>CVV2 Number</Form.Label>
                            <Form.Control type="text" placeholder="CVV2 Number" required />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom08">
                            <Form.Label>Expiration Data</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom08" style={{padding: "30px 0px 0px 0px"}}>
                            <Form.Control type="month" placeholder="Month" required />
                        </Form.Group>
                        {/* <Form.Group as={Col} md="3" controlId="validationCustom08" style={{paddingTop: "30px"}}>
                            <Form.Control type="text" placeholder="Year" required />
                        </Form.Group> */}
                    </Row>
                </Form>
            </Container>
        </div>
        <div>
            <Container>
                <h4>Review Order</h4>
            </Container>
        </div>
        <div>
            <Container>
                <Form>
                    <Row>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Total Quantity:
                            </Form.Label>
                            <Col sm="2">
                            <Form.Control type="text" placeholder="Value" />
                            </Col>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Shipping:
                            </Form.Label>
                            <Col sm="2">
                            <Form.Control type="text" placeholder="Free" />
                            </Col>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Total Price:
                            </Form.Label>
                            <Col sm="2">
                            <Form.Control type="text" placeholder="Rp 123" />
                            </Col>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        </div>
        <div>
            <Container className="button-ship" >
                <Button variant="info" type="submit" style={{ marginRight: '20px' }}>
                    Confirm
                </Button>
                <Button variant="info" type="submit">
                    Cancel
                </Button>
            </Container>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Checkout;