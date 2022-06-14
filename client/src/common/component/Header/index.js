import React from "react";

import { useDispatch } from "react-redux";

import { Container, Nav, Navbar } from "react-bootstrap";

import { logout } from "../../../redux/features/UserSlice";

import "./header.scss";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <Navbar variant="light" className="header">
      <Container fluid>
        <Navbar.Brand href="home" className="logo">
          Logo
        </Navbar.Brand>
        <Nav className="me-auto"></Nav>
        <Nav className="me-1">
          <Nav.Link className="account" onClick={(e) => handleLogout(e)}>
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
