import React from "react";
import { Modal } from "react-bootstrap";

function MenuModal(props) {
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
        <button className="order-button" onClick={props.handleOrder}>
          Order
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default MenuModal;
