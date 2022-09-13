import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import '../style/EditProfile.css';
import Navbar from '../components/Navbar';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { withRouter } from '../withRouter';

const EditProfile = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Container className="containerep">
        <Row className="row">
          <Col className="col">
            <h2>Edit Profile</h2>
            <Form>
              <Form.Group className="nameep">
                <Form.Label>Full Name :</Form.Label>
                <Form.Control type="text" placeholder="Johny Deep" />
              </Form.Group>
              <Form.Group className="tellep">
                <Form.Label>Telephone :</Form.Label>
                <Form.Control type="tel" placeholder="081122333" />
              </Form.Group>
              <Form.Group className="addressep">
                <Form.Label>Address :</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group className="mailep">
                <Form.Label>Email :</Form.Label>
                <Form.Control type="email" placeholder="example@mail.com" />
              </Form.Group>
              <Form.Group className="pwep">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button className="btnep" variant="info" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withRouter(EditProfile);
