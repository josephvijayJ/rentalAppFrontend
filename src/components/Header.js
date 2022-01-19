import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  let navigate = useNavigate();
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand style={{ color: 'blue' }}>RentalMart</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Link to="/allproducts">
              <Nav style={{ color: 'white' }}>All Products</Nav>
            </Link>
            <Link to="/addproducts">
              <Nav style={{ color: 'white' }}>Add Products</Nav>
            </Link>

            <Nav style={{ color: 'white' }}>Cart</Nav>

            <Link to="/about">
              <Nav style={{ color: 'white' }}>About Us</Nav>
            </Link>
          </Nav>
          <Nav>
            <NavDropdown title="User">
              <div className="dropdown-item">
                <NavDropdown.Item
                  onClick={() => {
                    navigate('/user/signup');
                  }}
                >
                  SignUp
                </NavDropdown.Item>

                <NavDropdown.Item
                  onClick={() => {
                    navigate('/user/login');
                  }}
                >
                  login
                </NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
