import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "../../css/Menu.css";
import SearchBar from "./SearchBar";

function MenuContainer() {
  const [menu, setMenu] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((response) => response.json())
      .then((data) => setMenu(data));
  }, []);

  function handleClose() {
    setShowModal(false);
  }

  function handleClick(burger) {
    setSelectedItem(burger);
    setShowModal(true);
  }

  const filterMenu = (category) => {
    if (category === "all") {
      setFilteredMenu(menu);
    } else {
      setFilteredMenu(menu.filter((item) => item.category === category));
    }
  };

  return (
    <>
      <div className="container my-5 menu-container">
        <h1 className="text-center mb-4">Menu</h1>

        <SearchBar filterMenu={filterMenu} />

        <div className="menu-box bg-dark text-light p-4 rounded">
          <div className="row">
            {menu.map((burger) => (
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

        {selectedItem && (
          <Modal show={showModal} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title className="modal-burger-title">
                {selectedItem.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="m-0 p-0">
              <div className=" img-description-modal-container">
                <div className="row">
                  <div className="col-6">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="menu-burger-modal-img  "
                    />
                  </div>
                  <div className="col-5">
                    <p className="description-text">
                      {selectedItem.description}
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-3 fw-bold">Price: ${selectedItem.price}</p>
            </Modal.Body>
            <Modal.Footer>
              <button className="order-button" onClick={handleClose}>
                Order
              </button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </>
  );
}

export default MenuContainer;
