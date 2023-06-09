import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navb = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="glass-nav mb-5">
      <Container>
        <Navbar.Brand href="/">Users List</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#"> </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/favorite">favorites</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navb;
