import React from "react";
import MyNavBar from "../components/UsedOnManyPages/MyNavBar";
import OrderContainer from "../components/Cart-components/OrderContainer";
import Footer from "../components/UsedOnManyPages/Footer";
import "../css/Cart.css"

function Cart() {
  return (
<div className="cart-page-container">
   <div className="cart-page-wrapper">
      <MyNavBar />
      <OrderContainer /> 
      </div>
          <Footer/>
  
          </div>
  
  );
}

export default Cart;
