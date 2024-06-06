import React,{useState,useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../../css/Footer.css";

function Footer({signedInUser,setSignedInUser}) {

 



  



  
  function handleSignOut(){
 setSignedInUser(null);
  };


  return (
    <div className="footer d-flex justify-content-end align-items-center">
      <Container className=" d-flex justify-content-end ">
        <Row>
          <Col xs="auto">
            <ul className="list-unstyled d-flex mb-0">
              <li className="mx-2">
                <a className="footer-links" href="/about-us">
                  About us
                </a>
              </li>
              <li className="mx-2">
                <a className="footer-links" href="/contact">
                  Contact
                </a>
              </li>
              <li className="mx-2">
                <a
                  className="footer-links"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="mx-2">
                <a
                  className="footer-links"
                  href="https://instagram.com"
                  target="_blank"
                  
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>

            {signedInUser ? (
              <li className="mx-2">
                <a
                  className="footer-links"
                  href="#"
                  onClick={handleSignOut}
                >
                  Sign out
                </a>
              </li>
              ): null }
           
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
