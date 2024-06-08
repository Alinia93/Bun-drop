import React from "react";

import { useLocation } from "react-router-dom";
import MyNavBar from "../components/UsedOnManyPages/MyNavBar";
import InputPaymentDetails from "../components/Payment-components/InputPaymentDetails";
import Footer from "../components/UsedOnManyPages/Footer";
import "../css/Payment.css"

function Payment({signedInUser}) {

  const location = useLocation();
  const { totalSum, products } = location.state || { totalSum: 0, products: [] };
  return <>
  

  <div className="payment-container">

  <InputPaymentDetails  signedInUser={signedInUser} totalSum={totalSum} products={products}/>

  </div>
  </>;
}

export default Payment;
