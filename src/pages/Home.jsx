import React from "react";
import HeroImage from "../components/Home-components/HeroImage";
import PopularBurgers from "../components/Home-components/PopularBurgers";
import Footer from "../components/UsedOnManyPages/Footer";
import MyNavBar from "../components/UsedOnManyPages/MyNavBar";

function Home() {
  return (
    <>
      <MyNavBar />
      <HeroImage />
      <PopularBurgers />
      <Footer />
    </>
  );
}

export default Home;
