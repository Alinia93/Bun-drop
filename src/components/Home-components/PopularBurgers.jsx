import React,{useState,useEffect} from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import "../../css/PopularBurgers.css";

function PopularBurgers() {

  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
   
    fetch("http://localhost:3000/bunDropMenu")
      .then((response) => response.json())
      .then((data) => {
        const burgerList = data.filter((burger) => burger.category === "burgers");
        const randomBurgers = getRandomBurgers(burgerList);
        setBurgers(randomBurgers);
      });
  }, []);



  function getRandomBurgers(burgerList){
    const shuffledList = burgerList.sort(() => 0.5 - Math.random());
    return shuffledList.slice(0, 3);
  };


  return (
    <div className="popular-burgers-container">
      <Carousel className="w-50  mx-auto">
       
       {burgers.map((burger,index)=>
       (
          <Carousel.Item className="carosel-item" key={index}>
          
          <img className="d-block w-100" src={burger.image} alt={burger.title} />
         
          <h3 className="burger-title-text">{burger.title}</h3>
        </Carousel.Item>
       
       ))}
      </Carousel>
    </div>
  );
}

export default PopularBurgers;
