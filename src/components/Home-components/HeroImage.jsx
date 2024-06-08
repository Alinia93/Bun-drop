import React from "react";
import big_hamburger from "../../images/big_hamburger.webp";
import "../../css/HeroImage.css";

function HeroImage() {
  function handlePopularBurgersClick() {
    window.scrollTo(0, 900);
  }

  return (
    <div className="hero-image-container">
      <div className="row no-gutters align-items-center">
        <div className="col-12">
          <img
            src={big_hamburger}
            alt="Big Hamburger"
            className="img-fluid hero-image"
          />
        </div>
      </div>
      <div>
        <div
          id="popular-burgers-title"
          className="text-center popular-burgers-text-container"
        >
          <h1 className=" popular-burgers-text">Popular Burgers</h1>
        </div>
      </div>
      
      <div className="hero-text-container">
        <p className="hero-text">Dropping burgers since 2021</p>
      </div>

      <div
        onClick={handlePopularBurgersClick}
        className="see-popular-burgers-container"
      >
        <p className="see-popular-burgers-text">See popular burgers</p>
      </div>
    </div>
  );
}

export default HeroImage;
