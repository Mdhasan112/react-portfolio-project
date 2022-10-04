import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//   import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavbarMain = () => {
    return (
        <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='nav-link' href="#home">Home</Nav.Link>
              <Nav.Link href="#About">About Me</Nav.Link>
              <Nav.Link href="#Services">Services</Nav.Link>
              <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavbarMain;