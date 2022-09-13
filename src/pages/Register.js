import React, { useState } from 'react';
import { Container, Card, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/Login.css';

const Register = () => {
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onChangeName = (e) => {
        const value = e.target.value;
        setName(value);
    }
    const onChangeTelephone = (e) => {
        const value = e.target.value;
        setTelephone(value);
    }
    const onChangeAddress = (e) => {
        const value = e.target.value;
        setAddress(value);
    }
    const onChangeEmail = (e) => {
        const value = e.tagert.value;
        setEmail(value);
    }
    const onChangePassword = (e) => {
        const value = e.tagert.value;
        setPassword(value);
    }

  return (
    <div>
        <div>
            <img src="https://cdn.discordapp.com/attachments/1017710027777257567/1018214691748708542/Si_Murah1.png" className="img" alt="logo" />
        </div>
        <Container style={{ paddingTop: '0px'}}>
            <Card style={{ width: '35rem' }} className="card">
                <div  className='regis' style={{ margin: '20px 20px'}}>
                    <h2>REGISTER ACCOUNT</h2>
                </div>
                <Form style={{ margin: '0px 20px'}}>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Col><Form.Label>Full Name</Form.Label></Col>
                            <Col><Form.Control type="text" placeholder="Full Name" value={name} onChange={onChangeName} /></Col>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Col><Form.Label>Telephone</Form.Label></Col>
                            <Col><Form.Control type="text" placeholder="Telephone" value={telephone} onChange={onChangeTelephone} /></Col>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Col><Form.Label>Address</Form.Label></Col>
                            <Col><Form.Control as="textarea" placeholder="Address" rows={3} value={address} onChange={onChangeAddress} /></Col>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Col><Form.Label>Email</Form.Label></Col>
                            <Col><Form.Control type="email" placeholder="Enter email" value={email} onChange={onChangeEmail} /></Col>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Col><Form.Label>Password</Form.Label></Col>
                            <Col><Form.Control type="password" placeholder="Password" value={password} onChange={onChangePassword} /></Col>
                        </Form.Group>
                    </Row>
                    <Button variant="danger" type="submit" style={{ width: '100%'}}>
                            SIGN UP
                    </Button>
                </Form>
                <div style={{ margin: '20px 20px', textAlign: 'center'}}>
                    Sudah punya akun? <Link to="/">Login</Link>
                </div>
            </Card>
        </Container>
    </div>
  )
}

export default Register