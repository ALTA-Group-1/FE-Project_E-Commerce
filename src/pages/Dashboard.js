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
import { withRouter } from '../withRouter';

const Dashboard = () => {
  const navigate = useNavigate();

  const [cookies, setCookies] = useCookies();
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
        setProfile(response.data.data);
        setCookies('name', response.data.data.name, '/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [product, setProduct] = useState();
  console.log(product);
  const getProduct = async () => {
    await axios
      .get('http://13.57.49.65/products')
      .then((response) => {
        setProduct(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    getProfile();
    getProduct();
  }, []);

  const handleDetailPage = (item) => {
    navigate(`/detail/`, {
      state: {
        image: item.images,
        name: item.name,
        price: item.price,
        description: item.description,
      },
    });
  };

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

  return (
    <div>
      <Navbar />
      <Category />
      {cookies.token !== undefined ? (
        <>
          <Button className="btnd" variant="info" onClick={() => goAddProduct()}>
            Create Product
          </Button>
        </>
      ) : null}
      <div className="containerdb">
        {product == undefined ? (
          <></>
        ) : (
          <>
            {product.map((item, index) => {
              return (
                <div key={index}>
                  <ProductCard image={item.images} name={item.name} price={item.price} id={item.id} token={cookies.token} detail={() => handleDetailPage(item)} />
                </div>
              );
            })}
          </>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
