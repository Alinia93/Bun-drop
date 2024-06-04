import React from "react";

import { useLocation } from "react-router-dom";
import MyNavBar from "../components/UsedOnManyPages/MyNavBar";
import InputPaymentDetails from "../components/Payment-components/InputPaymentDetails";

function Payment() {

  const location = useLocation();
  const { totalSum } = location.state || { totalSum: 0 };
  return <>
  
  <MyNavBar/>
  <InputPaymentDetails  totalSum={totalSum}/>
  
  </>;
}

export default Payment;
