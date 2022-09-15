import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import '../style/MyProduct.css';
import axios from 'axios';

const MyProduct = (props) => {
    const cookies = useCookies();
    var axios = require('axios');

    const data = {
        "productID": props.id
    }
    const config = {
        headers: { Authorization: `Bearer ${props.token}`},
    };
    const url = "http://13.57.49.65/myproducts"

    const addProduct = () => {
        axios
            .post(url, data, config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error.response.data);
            })
        console.log(props.token);
    }
  return (
    <div>
        <Container className="content mb-5">
            <div className="content-image">
                <img src={props.image} />
            </div>
            <div className="content-detail">
                <h5>{props.productname}</h5>
                <h5>Rp {props.price}</h5>
                <h5>{props.category}</h5>
                <h5>Product Description</h5>
                <p style={{ width: '100%'}}>{props.description}</p>
                <div className="btnEdit pt-3">
                    {
                        props.MyProduct == undefined ?
                        <>
                        </> :
                        <>
                        <Button variant="info" style={{marginRight: '20px'}} type="submit" onClick={() => addProduct()}>Edit Product</Button>
                        <Button variant="info">Remove Product</Button>
                        </>
                    }
                </div>
            </div>
        </Container>
    </div>
  )
}

export default MyProduct