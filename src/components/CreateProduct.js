import React from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import '../style/CreateProduct.css'

const CreateProduct = () => {
  return (
    <div>
        <Container className="content mb-5">
            <div className="pro-image">
                <img src="https://pbs.twimg.com/media/FchLCUcaMAIDzUe?format=jpg&name=small" />
                <div className='btn-add pt-3'>
                    <Button variant="info" type="submit">Add Picture</Button>
                </div>
            </div>
            <Form className="form">
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                    Product Name:
                    </Form.Label>
                    <Col sm="8">
                    <Form.Control type="text" placeholder="Product Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                    Price:
                    </Form.Label>
                    <Col sm="8">
                    <Form.Control type="text" placeholder="Price" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                    Category:
                    </Form.Label>
                    <Col sm="8">
                    <Form.Control type="text" placeholder="Category" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                    Quantity:
                    </Form.Label>
                    <Col sm="8">
                    <Form.Control type="text" placeholder="Quantity" />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Product Description:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </Container>
    </div>
  )
}

export default CreateProduct