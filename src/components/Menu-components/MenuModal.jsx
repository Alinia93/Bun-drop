import React from "react";
import { Modal } from "react-bootstrap";

function MenuModal(props) {

  function addToFavorites () 
  {
   
    if (props.signedInUser !== null) {
      fetch(`http://localhost:3000/users/${props.signedInUser.id}`)
        .then((res) => res.json())
        .then((user) => {
          const signedInUser = user;
          signedInUser.favorites.push(props.selectedItem);
  
          fetch(`http://localhost:3000/users/${props.signedInUser.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(signedInUser),
          });
          
        });
        props.favoritesNotify();
    }
  }

  function deleteFromFavorites(){
    if (props.signedInUser !== null) {
      fetch(`http://localhost:3000/users/${props.signedInUser.id}`)
        .then((res) => res.json())
        .then((user) => {
          const signedInUser = user;
          
          const updatedFavorites = signedInUser.favorites.filter(item => item.id !== props.selectedItem.id);
  
          fetch(`http://localhost:3000/users/${props.signedInUser.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...signedInUser, favorites: updatedFavorites }),
          })
          .then(() => {
            props.setFavorites(updatedFavorites);
            props.handleClose(); 
          });
        });
    }
  }


  return (
    <Modal  show={props.showModal} onHide={props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="modal-burger-title">
          {props.selectedItem.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="m-0 p-0">
        <div className="img-description-modal-container">
          <div className="row">
            <div className="col-6">
              <img
                src={props.selectedItem.image}
                alt={props.selectedItem.title}
                className="menu-burger-modal-img"
              />
            </div>
            <div className="col-5">
              <p className="description-text">
                {props.selectedItem.description}
              </p>
            </div>
          </div>
        </div>
        <p className="mt-3 fw-bold">Price: ${props.selectedItem.price}</p>
      </Modal.Body>
      <Modal.Footer>
      {props.signedInUser && !props.isOnFavoritePage ? (
          <button className="btn-favorites"variant="primary" onClick={addToFavorites}>
            Add to favorites
          </button>
        ):null}
         {props.signedInUser &&props.isOnFavoritePage==true ? (
          <button className="btn-favorites"variant="primary" onClick={deleteFromFavorites}>
            Delete from favorites
          </button>
        ):null}
        <button className="order-button" onClick={props.handleOrder}>
          Order
        </button>
        
      </Modal.Footer>
    </Modal>
  );
}

export default MenuModal;
