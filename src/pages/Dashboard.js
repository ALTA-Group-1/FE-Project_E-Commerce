import React from 'react';
import '../style/Dashboard.css';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Category from '../components/Category';
import axios from 'axios';
import Footer from '../components/Footer';
import { useCookies } from 'react-cookie';


const Dashboard = () => {
  const navigate = useNavigate();

  const [cookies, setCookies] = useCookies()
  const config = {
    headers: { Authorization: `Bearer ${cookies.token}` },
  };

  const urlProfile = 'http://13.57.49.65/users';

  const [profile, setProfile] = useState({});
  console.log(profile);
  const getProfile = async () => {
    await axios
      .get(urlProfile, config)
      .then((response) => {
        setProfile(response.data.data)
        setCookies("name", response.data.data.name, "/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [product, setProduct] = useState()
  console.log(product);
  const getProduct = async () => {
    await axios
      .get("http://13.57.49.65/products")
      .then((response) => {
        setProduct(response.data.data)
      })
      .catch((error) => {
        console.log(error.response.data);
      })
  }


  useEffect(() => {
    getProfile()
    getProduct()
  }, [])






  const goAddProduct = () => {
    navigate('/addproduct');
  };
  const goCart = () => {
    navigate('/cart');
  };
  const goDetail = () => {
    navigate('/detail');
  };
  const goEditProduct = () => {
    navigate('/editproduct');
  };
  const goEditProfile = () => {
    navigate('/editprofile');
  };
  const goHistory = () => {
    navigate('/history');
  };
  const goLogin = () => {
    navigate('/login');
  };
  const goMyStore = () => {
    navigate('/mystore');
  };
  const goMyProfile = () => {
    navigate('/myprofile');
  };

  return (
    <div>
      <div>
        <Button variant="primary" onClick={() => goAddProduct()}>
          go add product
        </Button>
        <Button variant="primary" onClick={() => goCart()}>
          go cart
        </Button>
        <Button variant="primary" onClick={() => goDetail()}>
          go detail
        </Button>
        <Button variant="primary" onClick={() => goEditProduct()}>
          go edit product
        </Button>
        <Button variant="primary" onClick={() => goEditProfile()}>
          go edit profile
        </Button>
        <Button variant="primary" onClick={() => goHistory()}>
          go history
        </Button>
        <Button variant="primary" onClick={() => goLogin()}>
          go login
        </Button>
        <Button variant="primary" onClick={() => goMyStore()}>
          go my store
        </Button>
        <Button variant="primary" onClick={() => goMyProfile()}>
          go my profile
        </Button>
      </div>
      <br></br>
      <Navbar />
      <Category />
      {
        cookies.token !== undefined ?
          <>
            <Button className="btnd" variant="info" onClick={() => goAddProduct()}>
              Create Product
            </Button>
          </> :
          null
      }
      <div className="containerdb">
        {
          product == undefined ?
            <>
            </> :
            <>
              {
                product.map((item) => {
                  return (
                    <ProductCard image={item.images} name={item.name} price={item.price} />
                  )
                })
              }</>
        }
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
