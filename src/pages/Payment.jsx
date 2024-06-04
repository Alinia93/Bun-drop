import React from "react";

import { useLocation } from "react-router-dom";
import MyNavBar from "../components/UsedOnManyPages/MyNavBar";
import InputPaymentDetails from "../components/Payment-components/InputPaymentDetails";
import Footer from "../components/UsedOnManyPages/Footer";
import "../css/Payment.css"

function Payment() {

  const location = useLocation();
  const { totalSum } = location.state || { totalSum: 0 };
  return <>
  

  <div className="payment-container">
  <MyNavBar/>
  <InputPaymentDetails  totalSum={totalSum}/>
  <Footer/>
  </div>
  </>;
}

export default Payment;
