import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CreateProduct from '../components/CreateProduct';
import Category from '../components/Category';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import '../style/CreateProduct.css';

const AddProduct = () => {
  const navigate = useNavigate()
  return (
    <div>
      <NavBar />
      <Category />
      <div style={{ margin: '50px 0px'}}>
        <Container className="title-create">
          <h1>Create Product</h1>
        </Container>
        <CreateProduct />
        <Container className="sub-create pt-3">
          <Button variant="info" type="submit" style={{marginRight: '20px'}}>Submit</Button>
          <Button variant="info" type="submit">Cancel</Button>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default AddProduct