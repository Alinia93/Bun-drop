import React from "react";
import MyNavBar from "../components/UsedOnManyPages/MyNavBar";
import OrderContainer from "../components/Cart-components/OrderContainer";
import Footer from "../components/UsedOnManyPages/Footer";
import "../css/Cart.css"

function Cart({signedInUser}) {
  return (
<>
      <OrderContainer signedInUser={signedInUser} /> 
      </> 
  );
}

export default Cart;
