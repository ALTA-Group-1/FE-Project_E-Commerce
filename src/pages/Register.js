import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';
// import { useCookies } from 'react-cookie';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [cookies, useCookies] = useCookies()


    // console.log(name, telephone, address, email, password);



    var data = JSON.stringify({
        "name": name,
        "phone": telephone,
        "address": address,
        "email": email,
        "password": password
    })

    var config = {
        method: 'post',
        url: 'http://13.57.49.65/users',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };


    const klikDaftar = async () => {
        await axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
        navigate("/login")
    }

    // useEffect(() => {
    //     klikDaftar()
    // }, [])


    return (
        <div>
            <div href="#">
                <img src="https://cdn.discordapp.com/attachments/1017710027777257567/1018214691748708542/Si_Murah1.png" className="img" alt="logo" onClick={() => navigate('/')} />
            </div>
            <Container style={{ paddingTop: '0px' }}>
                <Card style={{ width: '35rem' }} className="card">
                    <div className='regis' style={{ margin: '20px 20px' }}>
                        <h2>REGISTER ACCOUNT</h2>
                    </div>
                    <Form style={{ margin: '0px 20px' }}>
                        <Row>
                            <Form.Group className="mb-3">
                                <Col><Form.Label>Full Name</Form.Label></Col>
                                <Col><Form.Control type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} value={name} /></Col>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3">
                                <Col><Form.Label>Telephone</Form.Label></Col>
                                <Col><Form.Control type="text" placeholder="Telephone" onChange={(e) => setTelephone(e.target.value)} value={telephone} /></Col>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Col><Form.Label>Address</Form.Label></Col>
                                <Col><Form.Control as="textarea" placeholder="Address" rows={3} onChange={(e) => setAddress(e.target.value)} value={address} /></Col>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Col><Form.Label>Email</Form.Label></Col>
                                <Col><Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} /></Col>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Col><Form.Label>Password</Form.Label></Col>
                                <Col><Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} /></Col>
                            </Form.Group>
                        </Row>

                    </Form>
                    <div style={{ margin: '20px 20px', textAlign: 'center' }}>
                        Sudah punya akun? <Link to="/login">Login</Link>
                    </div>
                    <Button variant="info" type="submit" style={{ width: '100%' }} onClick={() => klikDaftar()}>
                        SIGN UP
                    </Button>
                </Card>
            </Container>
        </div>
    )
}

export default Register