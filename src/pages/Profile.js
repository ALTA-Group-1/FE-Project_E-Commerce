import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import '../style/Profile.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { withRouter } from '../withRouter';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Profile = () => {
  const navigate = useNavigate();
  const editPage = () => {
    navigate('/editProfile', {});
  };

  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className='bodyprofile'>
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
      </div>

      <Footer />
    </>
  );
};

export default withRouter(Profile);
