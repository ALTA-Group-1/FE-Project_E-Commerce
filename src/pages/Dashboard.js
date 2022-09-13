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

const Dashboard = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NjMwNTIzMTgsInVzZXJJZCI6OH0.LfHqP5JOTT2_VywqxDZiJWMtvmHgmA8fnfUfsf5VJ_g")
  console.log(token);

  const [status, setStatus] = useState(token == "" ? false : true)
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const urlProfile = "http://13.57.49.65/users"

  const [profile, setProfile] = useState({})
  console.log(profile);
  const getProfile = async () => {
    await axios
      .get(
        urlProfile, config
      )
      .then((response) => {
        console.log(response.data.data);
        setProfile(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getProfile()
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
      Dashboard
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
      <Navbar value={status} name={profile.name} account="https://i.kym-cdn.com/photos/images/facebook/001/927/176/f65" />
      <Category />
      <div className="container">
        <ProductCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
