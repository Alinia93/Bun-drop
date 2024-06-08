import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Countdown from 'react-countdown';
import "../../css/Payment.css";


function OrderSuccessfullyModal({ showModal, handleClose,products }) {
  const [timeLeft, setTimeLeft] = useState(Math.floor(Math.random() * (45 - 20 + 1)) + 20);

  useEffect(() => {
    if (showModal) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 60000);
      return () => clearInterval(timer);
    }
  }, [showModal]);


  const Completionist = () => <span>Your order has arrived!</span>;

  function renderer({ minutes, seconds, completed })
  {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span>
          Approximately time: {minutes} minutes and {seconds} seconds
        </span>
      );
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="modal-title">Your order is on its way! </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <div className ="product-container-payment">
          <p className="modal-title">Your Order: </p>
          <ul>
  {products.map((product)=> (
<li> {product.quantity} {product.title}</li>
  ))}
</ul>
        </div>
   
      <Countdown date={Date.now() + timeLeft * 60000} renderer={renderer} />
      </Modal.Body>
   
  
    </Modal>
  );
}

export default OrderSuccessfullyModal;