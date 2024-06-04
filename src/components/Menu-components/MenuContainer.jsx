import React, { useState, useEffect } from "react";

import "../../css/Menu.css";
import SearchBar from "./SearchBar";
import MenuModal from "./MenuModal";

function MenuContainer(props) {
  const [menu, setMenu] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bunDropMenu")
      .then((response) => response.json())
      .then((data) => {
        setMenu(data);
        setFilteredMenu(data);
      });
  }, []);

  function handleClose() {
    setShowModal(false);
  }

  function handleClick(burger) {
    setSelectedItem(burger);
    setShowModal(true);
  }

  function filterMenu(category) {
    if (category === "all") {
      setFilteredMenu(menu);
    } else {
      setFilteredMenu(menu.filter((c) => c.category === category));
    }
  }

  function handleOrder() {
    let cart = JSON.parse(localStorage.getItem('tempCart')) || [];
    cart.push(selectedItem);
    localStorage.setItem('tempCart', JSON.stringify(cart));
    
    props.setTempCartCount(cart.length);
    handleClose();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div className="container my-5 menu-container">
        <h1 className="text-center mb-4">Menu</h1>

        <SearchBar filterMenu={filterMenu} />

        <div className="menu-box bg-dark text-light p-4 rounded">
          <div className="row">
            {filteredMenu.map((burger) => (
              <div key={burger.id} className=" col-6 col-md-6  col-lg-4 mb-4">
                <div
                  className="burger-item text-center"
                  onClick={() => handleClick(burger)}
                >
                  <img
                    src={burger.image}
                    alt={burger.title}
                    className="burger-image img-fluid"
                  />
                  <h5 className="mt-2">{burger.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedItem ? (
          <MenuModal
            showModal={showModal}
            handleOrder={handleOrder}
            handleClose={handleClose}
            selectedItem={selectedItem}
          />
        ) : null}
      </div>
    </>
  );
}

export default MenuContainer;
