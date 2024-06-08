import React, { useState } from "react";
import MenuContainer from "../components/Menu-components/MenuContainer";
import SearchBar from "../components/Menu-components/SearchBar";
import MyNavBar from "../components/UsedOnManyPages/MyNavBar";
import "../css/Menu.css"
import Footer from "../components/UsedOnManyPages/Footer";

function Menu({signedInUser, setSignedInUser,notify,favoritesNotify}) {
  const [tempCartCount, setTempCartCount] = useState(0);

  return (
    <>
    <div className="menu-page-container">
     
      <div className="d-flex justify-content-center align-items-center">
      <MenuContainer notify={notify} favoritesNotify={favoritesNotify} signedInUser={signedInUser} setSignedInUser={setSignedInUser}setTempCartCount={setTempCartCount} />
      </div>
  
      </div>
    </>
  );
}

export default Menu;
