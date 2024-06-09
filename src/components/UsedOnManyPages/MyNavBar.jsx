import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

import logo from "../../images/logo.png";

import "../../css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function MyNavBar(props) 
{

  

  return (
    <>
    <Navbar expand="lg">
      <Container fluid className=" container   ">
        <Navbar.Brand className=" brand-container" as={Link} to="/">
          <img className="img-fluid logo" src={logo} alt="Bun drop logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse
          id="navbar"
          className="navbar-collapse-container"
        >
          <Nav >
            <Nav.Link className=" nav-links" as={Link} to="/menu">
              Menu
            </Nav.Link>

            <Nav.Link className="nav-links" as={Link} to="/aboutUs" >
              About us
            </Nav.Link>
            <FontAwesomeIcon className="cart-icon" icon={faCartShopping} transform=" down-12" />
            <Nav.Link className="m-0 nav-links " as={Link} to="/cart">
              Your Order
            </Nav.Link>
            {props.signedInUser ? (
            <>
            
              <Nav.Link className="nav-links"  as={Link} to="/favorites">
              <FontAwesomeIcon className="heart-icon" icon={faHeart} transform="down-1 left-6" />
                Your favorites
              </Nav.Link>
              <span className="username">{`Welcome ${props.signedInUser.username}`}</span>
            </>
          ) : (
            <Nav.Link className="nav-links" as={Link} to="/signIn">
              Sign in
            </Nav.Link>
          )}
          </Nav>
        </Navbar.Collapse>
     
      </Container>
    </Navbar>
      </>
  );
}

export default MyNavBar;
