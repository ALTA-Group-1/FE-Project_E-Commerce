import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MyProduct from '../components/MyProduct';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import '../style/MyProduct.css';

const MyStore = () => {
  const navigate = useNavigate();
  return (
    <div style={{ paddingBottom: '50px' }}>
      <NavBar />
      <div style={{ margin: '50px 0px' }}>
        <Container className="titlepro">
          <h1>My Product</h1>
        </Container>
        <MyProduct />
        <MyProduct />
      </div>
      <Footer />
    </div>
  );
};

export default MyStore;
