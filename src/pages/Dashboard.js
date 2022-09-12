import React from 'react';
import '../style/Dashboard.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Category from '../components/Category';

const Dashboard = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);
console.log(login);
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
      <Button onClick={() => setLogin(!login)}>Toggle Navbar</Button>
      <Navbar value={login} total="1000" item="20" account="https://i.kym-cdn.com/photos/images/facebook/001/927/176/f65"/>
      <Category />
      <div className="container">
        <ProductCard />
      </div>
    </div>
  );
};

export default Dashboard;
