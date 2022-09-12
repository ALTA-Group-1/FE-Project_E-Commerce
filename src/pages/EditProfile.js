import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { withRouter } from '../withRouter';

const EditProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="con">
      <Container className="container">
        <Row className="row">
          <Col className="col">
            <h2>Edit Profile</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name :</Form.Label>
                <Form.Control type="text" placeholder="Johny Deep" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Telephone :</Form.Label>
                <Form.Control type="tel" placeholder="081122333" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address :</Form.Label>
                <Form.Control type="text" placeholder="Jl. abcd" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email :</Form.Label>
                <Form.Control type="email" placeholder="example@mail.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(EditProfile);
