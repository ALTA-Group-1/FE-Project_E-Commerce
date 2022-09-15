/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useCookies } from 'react-cookie';

const NavBar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies, setCookies, removeCookies] = useCookies();
  const handleLogout = () => {
    removeCookies("token")
    alert("You have logged out")
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid className="align-items-center justify-content-center">
          <Navbar.Brand href="/" className="ms-5 ps-5 me-0">
            <img src="https://cdn.discordapp.com/attachments/1017710027777257567/1018214691748708542/Si_Murah1.png" style={{ maxWidth: 100, maxHeight: 100 }} onClick={() => navigate('/')}></img>{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="align-items-center justify-content-center">
            <Form className="d-flex me-5">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-info" className="me-5">
                Search
              </Button>
            </Form>
            <Nav className=" my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              {cookies.token !== undefined ? (
                <>
                  <Nav.Link href="/cart" className="me-5 pe-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16" className="p-0">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </Nav.Link>
                  <Nav.Link href="#action2" className="me-0 border-end border-grey" onClick={() => navigate('/history')}>
                    Order History
                  </Nav.Link>
                  <Nav.Link href="/myprofile">
                    {' '}
                    {cookies.name} <img src="https://i.kym-cdn.com/photos/images/facebook/001/927/176/f65" width="25" height="25"></img>
                  </Nav.Link>
                  <Nav.Link onClick={() => handleLogout()}>
                    Logout
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    Log Out
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/login" className="me-5">
                    Login
                  </Nav.Link>
                  <Nav.Link href="#action2"></Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
