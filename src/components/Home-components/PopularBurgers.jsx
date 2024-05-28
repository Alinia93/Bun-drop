import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import burger_1 from "../../images/burger_1.png";
import burger_2 from "../../images/burger_2.png";
import burger_3 from "../../images/burger_3.png";
import "../../css/PopularBurgers.css";

function PopularBurgers() {
  return (
    <div className="popular-burgers-container">
      <Carousel className="w-50 mx-auto">
        <Carousel.Item>
          <img className="d-block w-100" src={burger_1} alt="First Burger" />
          <Carousel.Caption>
            <h3>Burger 1</h3>
            <p>Description of Burger 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={burger_2} alt="Second Burger" />
          <Carousel.Caption>
            <h3>Burger 2</h3>
            <p>Description of Burger 2</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={burger_3} alt="Third Burger" />
          <Carousel.Caption>
            <h3>Burger 3</h3>
            <p>Description of Burger 3</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default PopularBurgers;
