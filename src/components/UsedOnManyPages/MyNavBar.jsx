import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../images/logo.png";

function MyNavBar() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Bun drop logo" />
          </Navbar.Brand>
          <Navbar.Toggle></Navbar.Toggle>
          <Nav>
            <Nav.Link href="/menu"> Menu</Nav.Link>
            <Nav.Link> Popular burgers</Nav.Link>
            <Nav.Link> About us</Nav.Link>
            <Nav.Link> Your Order</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavBar;
