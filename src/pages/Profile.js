import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import '../style/Profile.css';
import Navbar from '../components/Navbar';
import { withRouter } from '../withRouter';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useCookies } from "react-cookie"

const Profile = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies()
  const [status, setStatus] = useState(cookies.token == "" ? false : true)
  const editPage = () => {
    navigate('/editProfile', {});
  };

  const location = useLocation();

  return (
    <>
      <Navbar value={status}  />
      <Container className="containerprof">
        <Row>
          <Col sm={8}>
            <h2>Profile</h2>
            <h5>Nama Lengkap :</h5>
            <h5>Nomor Telephone :</h5>
            <h5>Alamat :</h5>
            <h5>Email :</h5>
          </Col>
          <Col sm={4}>
            <Button variant="secondary" onClick={editPage}>
              Edit Profile
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withRouter(Profile);
