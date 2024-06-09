import React from "react";
import HeroImage from "../components/Home-components/HeroImage";
import PopularBurgers from "../components/Home-components/PopularBurgers";


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
