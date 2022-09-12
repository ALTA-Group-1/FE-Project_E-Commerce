/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = (props) => {
const location = useLocation()
  return (
    <div>
      Navbar
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="ms-5 ps-5">
            <img src="https://cdn.discordapp.com/attachments/1017710027777257567/1018214691748708542/Si_Murah1.png" style={{ maxWidth: 100, maxHeight: 100 }}></img> Si Murah{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex col-5">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              {props.value ? (
                <>
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="#action1">Login</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}


export default NavBar
