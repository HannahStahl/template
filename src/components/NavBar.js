import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <Navbar collapseOnSelect expand="lg">
    <Navbar.Brand as={NavLink} to="/">
      <img
        alt="Home"
        src="/favicon.ico"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto" activeKey={window.location.pathname}>
        <Nav.Link as={NavLink} to="/about" eventKey="1">About</Nav.Link>
        <Nav.Link as={NavLink} to="/items" eventKey="2">Items</Nav.Link>
        <Nav.Link as={NavLink} to="/contact" eventKey="3">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
