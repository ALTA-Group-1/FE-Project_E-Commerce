import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import '../style/Checkout.css';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Checkout = () => {
    const [validated, setValidated] = useState(false);
    const [cart, setCart] = useState()
    const [cookies, setCookies] = useCookies()
    const [quantity, setQuantity] = useState()
    const [price, setPrice] = useState()



    const config = {
        headers: { Authorization: `Bearer ${cookies.token}` },
    };
    const urlCart = 'http://13.57.49.65/carts';

    const getCart = async () => {
        await axios
            .get(urlCart, config)
            .then((response) => {
                setCart(response.data.message);
                setQuantity(response.data.message.TotalQuantity)
                setPrice(response.data.message.TotalPrice)
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };

    useEffect(() => {
        getCart()
    }, [])
    console.log(cart);
    console.log(typeof price);


    const [street, setStreet] = useState()
    const [city, setCity] = useState()
    const [province, setProvince] = useState()
    const [postcode, setPostcode] = useState()
    const [visa, setVisa] = useState()
    const [name, setName] = useState()
    const [num, setNum] = useState()
    const [cvv2, setCvv2] = useState()
    const [month, setMonth] = useState()
    const [year, setYear] = useState()

    const setDate = (e) => {
        var a = e.split("-")
        console.log(a);
        setMonth(parseInt(a[1]))
        setYear(parseInt(a[0]))
    }

    console.log(street, city, province, postcode, visa, name, num, cvv2, month, year);
    console.log(typeof street, typeof city, typeof province, typeof postcode, typeof visa, typeof name, typeof num, typeof cvv2, typeof month, typeof year);

    const handleSubmit = async () => {
        var Data = JSON.stringify({
            "street": street,
            "city": city,
            "province": province,
            "postcode": postcode,
            "visa": visa,
            "name on card": name,
            "number card": num,
            "noCvv2": cvv2,
            "month": month,
            "year": year
        })
        console.log(Data);


        var config = {
            method: 'post',
            url: 'http://13.57.49.65/orders',
            headers: {
                'Authorization': `Bearer ${cookies.token}`,
                'Content-Type': 'application/json'
            },
            data: Data
        };

        await axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    };

    const confirmOrder = () => {
        var config = {
            method: 'put',
            url: 'http://13.57.49.65/orders/confirm',
            headers: {
                'Authorization': `Bearer ${cookies.token}`
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error.response.message);
            });
    }


    
    return (
        <div style={{ padding: "0px 0px 90px 0px" }}>
            <div>
                <NavBar />
            </div>
            <div style={{ padding: "30px" }}>
                <Container>
                    <h4>Shipping Address</h4>
                </Container>
            </div>
            <div>
                <Container>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="10" controlId="validationCustom01">
                                <Form.Label>Street</Form.Label>
                                <Form.Control type="text" placeholder="Street" required onChange={(e) => setStreet(e.target.value)} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid street.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationCustom02">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" required onChange={(e) => setCity(e.target.value)} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationCustom03">
                                <Form.Label>State / Province</Form.Label>
                                <Form.Control type="text" placeholder="State / Province" required onChange={(e) => setProvince(e.target.value)} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state / Province.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationCustom04">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control type="text" placeholder="Zip Code" required onChange={(e) => setPostcode(parseInt(e.target.value))} />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid zip.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                    </Form>
                </Container>
            </div>
            <div>
                <Container>
                    <h4>Credit Card</h4>
                </Container>
            </div>
            <div>
                <Container>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="10" controlId="validationCustom05">
                                <Form.Label>Visa</Form.Label>
                                <Form.Control type="text" placeholder="Visa" required onChange={(e) => setVisa(e.target.value)} />
                            </Form.Group>
                            <Form.Group as={Col} md="10" controlId="validationCustom06">
                                <Form.Label>Name On Card</Form.Label>
                                <Form.Control type="text" placeholder="Name On Card" required onChange={(e) => setName(e.target.value)} />
                            </Form.Group>
                            <Form.Group as={Col} md="5" controlId="validationCustom07">
                                <Form.Label>Card Number</Form.Label>
                                <Form.Control type="text" placeholder="Card Number" required onChange={(e) => setNum(parseInt(e.target.value))} />
                            </Form.Group>
                            <Form.Group as={Col} md="5" controlId="validationCustom08">
                                <Form.Label>CVV2 Number</Form.Label>
                                <Form.Control type="text" placeholder="CVV2 Number" required onChange={(e) => setCvv2(parseInt(e.target.value))} />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom08">
                                <Form.Label>Expiration Data</Form.Label>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom08" style={{ padding: "30px 0px 0px 0px" }}>
                                <Form.Control type="month" placeholder="Month" required onChange={(e) => setDate(e.target.value)} />
                            </Form.Group>
                            {/* <Form.Group as={Col} md="3" controlId="validationCustom08" style={{paddingTop: "30px"}}>
                            <Form.Control type="text" placeholder="Year" required />
                        </Form.Group> */}
                        </Row>
                    </Form>
                </Container>
            </div>
            <div>
                <Container>
                    <h4>Review Order</h4>
                </Container>
            </div>
            <div>
                <Container>
                    <Form>
                        <Row>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Total Quantity:
                                </Form.Label>
                                <Col sm="2">
                                    <Form.Control type="text" value={quantity} />
                                </Col>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Shipping:
                                </Form.Label>
                                <Col sm="2">
                                    <Form.Control type="text" value="Free" />
                                </Col>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Total Price:
                                </Form.Label>
                                <Col sm="2">
                                    <Form.Control type="text" value={price} />
                                </Col>
                            </Form.Group>
                        </Row>
                    </Form>
                </Container>
            </div>
            <div>
                <Container >
                    <Button variant="info" style={{ marginRight: '20px' }} onClick={() => handleSubmit()}>
                        Input Order
                    </Button>
                    <Button variant="info" type="submit">
                        Cancel
                    </Button>
                    <Button onClick={() => confirmOrder()}>
                        Confirm Order
                    </Button>
                </Container>
            </div>
            <button onClick={() => handleSubmit()}>Input Order</button>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Checkout;