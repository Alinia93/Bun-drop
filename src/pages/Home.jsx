import React from "react";
import HeroImage from "../components/Home-components/HeroImage";
import PopularBurgers from "../components/Home-components/PopularBurgers";
import Footer from "../components/UsedOnManyPages/Footer";
import MyNavBar from "../components/UsedOnManyPages/MyNavBar";
import "../css/Home.css"

function Home() {
  return (
    <>
    <div className="homePage-container">
      <HeroImage />
      <PopularBurgers />
      </div>
    </>
  );
}

export default Home;
