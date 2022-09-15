import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import MyProduct from '../components/MyProduct';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import '../style/MyProduct.css';
import axios from 'axios';

const MyStore = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies();
  const [product, setProduct] = useState();
  console.log(cookies.token);
  const config = {
    headers: { Authorization: `Bearer ${cookies.token}`},
  };
  const urlAdd = "http://13.57.49.65/myproducts";

  const getProduct = async () => {
    await axios
    .get(urlAdd, config)
    .then((response) => {
      setProduct(response.data.data)
    })
    .catch((error) => {
      console.log(error.response.data);
    });
  };

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div style={{ paddingBottom: '50px' }}>
      <NavBar />
      <div style={{ margin: '50px 0px' }}>
        <Container className="titlepro">
          <h1>My Product</h1>
        </Container>
        <div>
          {
            product == undefined ?
            <>
            </> :
            <>
              {
                product.map((item) => {
                  return (
                    <MyProduct image={item.images} name={item.productname} price={item.price} id={item.id} token={cookies.token} add={"y"} />
                  )
                })
              }
            </>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyStore;