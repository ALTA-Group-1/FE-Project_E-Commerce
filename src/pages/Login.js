import React, { useState } from 'react';
import { Container, Card, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    }

    const onChangePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    }
        
  return (
    <div>
        <div>
            <img src="https://cdn.discordapp.com/attachments/1017710027777257567/1018214691748708542/Si_Murah1.png" className="img" alt="logo" />
        </div>
        <Container style={{ paddingTop: '0px'}}>
            <Card style={{ width: '25rem' }} className="card">
                <div style={{ margin: '20px 20px'}}>
                    <h2>LOGIN ACCOUNT</h2>
                </div>
                <Form style={{ margin: '0px 20px'}}>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Col><Form.Label>Email</Form.Label></Col>
                            <Col><Form.Control type="email" placeholder="Enter email" value={email} onChange={onChangeEmail} /></Col>
                            <Col><Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text></Col>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Col><Form.Label>Password</Form.Label></Col>
                            <Col><Form.Control type="password" placeholder="Password" value={password} onChange={onChangePassword} /></Col>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="danger" type="submit" style={{ width: '100%'}}>
                        LOGIN
                    </Button>
                </Form>
                <div style={{ margin: '20px 20px', textAlign: 'center'}}>
                    Belum punya akun? <Link to="/register">Register</Link>
                </div>
            </Card>
        </Container>
    </div>
  )
}

export default Login;