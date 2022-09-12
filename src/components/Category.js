import React from 'react';
import '../style/Category.css';
import { Nav } from 'react-bootstrap';

const Category = () => {
  return (
    <>
      <Nav className="justify-content-center category">
        <Nav.Item>
          <Nav.Link className="book" href="">
            Books
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="home" href="">
            Home Living
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="style" href="">
            Style
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="electronic" href="">
            Electronic
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Category;
