import React, { useState } from 'react';
import axios from 'axios';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import '../style/CreateProduct.css';

const AddProduct = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [desc, setDesc] = useState('');

  // const goMyStore = () => {
  //   navigate('/mystore');
  // };

  var data = JSON.stringify({
    images: image,
    productname: product,
    price: price,
    stock: stock,
    description: desc,
  });

  var config = {
    method: 'post',
    url: '13.57.49.65/products',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  const klikSubmit = async () => {
    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  return (
    <div>
      <NavBar />
      <div style={{ margin: '50px 0px 100px 0px' }}>
        <Container className="title-create">
          <h1>Create Product</h1>
        </Container>
        <Container className="content mb-5">
          <div className="pro-image">
            <img src="https://pbs.twimg.com/media/FchLCUcaMAIDzUe?format=jpg&name=small" />
            <div className="btn-add pt-3">
              <Button variant="info" type="submit" onClick={(e) => setImage(e.target.value)} value={image}>
                Add Picture
              </Button>
            </div>
          </div>
          <Form className="form">
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="4">
                Product Name:
              </Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="Product Name" onChange={(e) => setProduct(e.target.value)} value={product} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="4">
                Price:
              </Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)} value={price} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="4">
                Category:
              </Form.Label>
              <Col sm="8">
                <Form.Select aria-label="Default select example">
                  <option>Category</option>
                  <option value="1">Books</option>
                  <option value="2">Home Living</option>
                  <option value="3">Style</option>
                  <option value="4">Electronic</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Product Description:</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => setDesc(e.target.value)} value={desc} />
            </Form.Group>
          </Form>
        </Container>
        <Container className="sub-create pt-3">
          <Button variant="info" type="submit" style={{ marginRight: '20px' }} onClick={() => klikSubmit()}>
            Submit
          </Button>
          <Button variant="info" type="submit" onClick={() => navigate('/')}>
            Cancel
          </Button>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default AddProduct;
