import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../style/Profile.css';
import Navbar from '../components/Navbar';
import { withRouter } from '../withRouter';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Footer from '../components/Footer';

const Profile = () => {
  const navigate = useNavigate();

  const [cookies, setCookies] = useCookies();
  const editPage = () => {
    navigate('/editProfile', {});
  };

  const urlProfile = 'http://13.57.49.65/users';
  const config = {
    headers: { Authorization: `Bearer ${cookies.token}` },
  };

  const [profile, setProfile] = useState({});
  console.log(profile);
  const getProfile = async () => {
    await axios
      .get(urlProfile, config)
      .then((response) => {
        setProfile(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const deleteUser = () => {
    var urlData = {
      method: 'delete',
      url: 'http://13.57.49.65/users',
      headers: {
        Authorization: `Bearer ${cookies.token}`,
      },
    };

    axios(urlData)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert('User Deleted');
        navigate('/login');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const goMyStore = () => {
    navigate('/mystore');
  };

  return (
    <>
      <Navbar />
      <Container className="containerprof" style={{margin: '120px'}}>
        <Row>
          <Col sm={8}>
            <h2>Profile</h2>
            <h5>Nama Lengkap : {profile.name}</h5>
            <h5>Nomor Telephone :</h5>
            <h5>Alamat : {profile.address}</h5>
            <h5>Email : {profile.email}</h5>
          </Col>
          <Col sm={4}>
            <Button variant="info" onClick={() => goMyStore()} style={{ marginBottom: '20px' }}>
              My Store
            </Button>
            <Button variant="info" onClick={() => editPage()} style={{ marginBottom: '20px' }}>
              Edit Profile
            </Button>
            <Button variant="danger" onClick={() => deleteUser()}>
              Delete Profile
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default withRouter(Profile);
