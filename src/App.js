import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './pages/AddProduct';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';
import EditProduct from './pages/EditProduct';
import EditProfile from './pages/EditProfile';
import History from './pages/History';
import Login from './pages/Login';
import Register from './pages/Register';
import MyStore from './pages/MyStore';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import { CookiesProvider } from 'react-cookie';

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/editproduct" element={<EditProduct />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mystore" element={<MyStore />} />
        <Route path="/myprofile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
