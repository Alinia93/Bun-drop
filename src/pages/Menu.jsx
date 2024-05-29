import React, { useState } from "react";
import MenuContainer from "../components/Menu-components/MenuContainer";
import SearchBar from "../components/Menu-components/SearchBar";
import MyNavBar from "../components/UsedOnManyPages/MyNavBar";

function Menu() {
  const [tempCartCount, setTempCartCount] = useState(0);

  return (
    <>
      <MyNavBar tempCartCount={tempCartCount} />
      <MenuContainer setTempCartCount={setTempCartCount} />
    </>
  );
}

export default Menu;
