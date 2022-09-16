import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../style/EditProfile.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { withRouter } from '../withRouter';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const EditProfile = () => {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies()
  const [name, setName] = useState();
  const [telephone, setTelephone] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log(name, telephone, address, email, password);



  var data = JSON.stringify({
    "name": name,
    "phone": telephone,
    "address": address,
    "email": email,
    "password": password
  })

  var config = {
    method: 'put',
    url: 'http://13.57.49.65/users',
    headers: {
      'Authorization': `Bearer ${cookies.token}`,
      'Content-Type': 'application/json'
    },
    data: data
  };


  const updateProfile = async () => {
    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        {
          email == undefined && password == undefined ?  navigate("/myprofile") :removeCookie("token");navigate("/login")
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }


  return (
    <>
      <Navbar />
      <Container className="containerep" style={{margin: '120px'}}>
        <Row className="row">
          <Col className="col">
            <h2>Edit Profile</h2>
            <Form>
              <Form.Group className="nameep">
                <Form.Label>Full Name :</Form.Label>
                <Form.Control type="text" placeholder="Johny Deep" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="tellep">
                <Form.Label>Telephone :</Form.Label>
                <Form.Control type="tel" placeholder="081122333" onChange={(e) => setTelephone(e.target.value)} />
              </Form.Group>
              <Form.Group className="addressep">
                <Form.Label>Address :</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => setAddress(e.target.value)} />
              </Form.Group>
              <Form.Group className="mailep">
                <Form.Label>Email :</Form.Label>
                <Form.Control type="email" placeholder="example@mail.com" onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group className="pwep">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
            </Form>
            <Button className="btnep" variant="info" type="submit" onClick={() => updateProfile()}>
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default withRouter(EditProfile);
