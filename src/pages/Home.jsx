import React from "react";
import HeroImage from "../components/Home-components/HeroImage";
import PopularBurgers from "../components/Home-components/PopularBurgers";
import Footer from "../components/UsedOnManyPages/Footer";

function Home() {
  return (
    <>
      <HeroImage />
      <PopularBurgers />
      <Footer />
    </>
  );
}

export default Home;
