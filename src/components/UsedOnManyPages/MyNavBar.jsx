import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../images/logo.png";

import "../../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function MyNavBar() {
  return (
    <Navbar expand="lg">
      <Container fluid className=" d-flex align-items-center position-relative">
        <Navbar.Brand className=" brand-container" href="/">
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
            <Nav.Link className=" nav-links" href="#popular-burgers-title">
              Popular burgers
            </Nav.Link>
            <Nav.Link className="nav-links" href="/about-us">
              About us
            </Nav.Link>
            <FontAwesomeIcon icon={faCartShopping} transform=" down-12" />
            <Nav.Link className="nav-links" href="/your-order">
              Your Order
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className=" nav-links-2-container">
          <FontAwesomeIcon icon={faHeart} transform=" down-5 left-6" />

          <Nav.Link className="nav-links-2">Your favorites</Nav.Link>
          <Nav.Link className="nav-links-2">Sign in</Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
