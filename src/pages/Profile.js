import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../style/Profile.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { withRouter } from '../withRouter';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useCookies } from "react-cookie"
import axios from 'axios';
import Footer from '../components/Footer';

const Profile = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies()
  const editPage = () => {
    navigate('/editProfile', {});
  };

  const urlProfile = "http://13.57.49.65/users"
  const config = {
    headers: { Authorization: `Bearer ${cookies.token}` }
  };

  const [profile, setProfile] = useState({})
  console.log(profile);
  const getProfile = async () => {
    await axios
      .get(
        urlProfile, config
      )
      .then((response) => {
        setProfile(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

useEffect(() => {
  getProfile()
}, [])



  return (
    <>
      <Navbar value={cookies.token == "" ? false : true} name={profile.name} account="https://i.kym-cdn.com/photos/images/facebook/001/927/176/f65" />
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
      <Footer />
    </>
  );
};

export default withRouter(Profile);
