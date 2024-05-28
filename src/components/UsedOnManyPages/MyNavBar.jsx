import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../images/logo.png";
import Image from "react-bootstrap/Image";
import "../../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MyNavBar() {
  return (
    <Navbar expand="lg">
      <Container
        fluid
        className="border border-danger d-flex align-items-center position-relative"
      >
        <Navbar.Brand
          className="border border-primary brand-container"
          href="/"
        >
          <img className="img-fluid logo" src={logo} alt="Bun drop logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse
          id="navbar"
          className="flex-grow-1 navbar-collapse-container"
        >
          <Nav className="mx-auto">
            <Nav.Link className=" nav-links" href="/menu">
              Menu
            </Nav.Link>
            <Nav.Link className=" nav-links" href="/popular-burgers">
              Popular burgers
            </Nav.Link>
            <Nav.Link className="nav-links" href="/about-us">
              About us
            </Nav.Link>
            <Nav.Link className="nav-links" href="/your-order">
              Your Order
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav className="border border-primary nav-absolute">
          <FontAwesomeIcon icon="fa-regular fa-heart" />

          <Nav.Link className="nav-links">Your favorites</Nav.Link>
          <Nav.Link>Sign in</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
