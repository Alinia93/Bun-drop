import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../css/Payment.css";

function InputPaymentDetails({totalSum}) {

    const [paymentMethod, setPaymentMethod] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [showCardForm, setShowCardForm] = useState(false);
    const [showSwishForm, setShowSwishForm] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [validationError, setValidationError] = useState("");
    const [deliveryTime, setDeliveryTime] = useState(null);

    useEffect(() => {
      if (modalVisible) {
        document.body.style.overflow = "hidden"; 
      } else {
        document.body.style.overflow = ""; 
      }
    }, [modalVisible]);

    const handlePaymentMethod = (method) => {
      setPaymentMethod(method);
      setValidationError("");
      if (method === "bankCard") {
        setShowCardForm(true);
        setShowSwishForm(false);
      } else if (method === "swish") {
        setShowSwishForm(true);
        setShowCardForm(false);
      }
    };

 
    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
        setValidationError("");
      };
    
      const handleExpiryDateChange = (e) => {
        setExpiryDate(e.target.value);
        setValidationError("");
      };
    
      const handleCvvChange = (e) => {
        setCvv(e.target.value);
        setValidationError("");
      };
    
      const handleOrder = () => {
        if (paymentMethod === "bankCard") {
          // Validate card details
          if (cardNumber.length !== 16) {
            setValidationError("Card number must be 16 digits.");
            return;
          }
        
          if (
            expiryDate.length !== 4 || // Kontrollera längden
            isNaN(expiryDate) || // Kontrollera om det är ett nummer
            parseInt(expiryDate.slice(0, 2)) > 12 || // Kontrollera om månaden är korrekt
            parseInt(expiryDate.slice(2, 4)) < new Date().getFullYear().toString().slice(2) // Kontrollera om året är i framtiden
          ) {
            setValidationError("Invalid expiry date.");
            return;
        
        
          }
          const cvvRegex = /^[0-9]{3}$/; // Reguljärt uttryck för att matcha en sekvens av tre siffror

          if (!cvvRegex.test(cvv)) {
            setValidationError("CVV must be 3 digits.");
            return;
          }
        }
    
        const randomDeliveryTime = Math.floor(Math.random() * 26) + 20;
        setDeliveryTime(randomDeliveryTime);
      
        setModalVisible(true);
        console.log("Modal visible:", modalVisible); 
      };
    
      const closeModal = () => {
        setModalVisible(false);
        // Clear form fields
        setCardNumber("");
        setExpiryDate("");
        setCvv("");
        setValidationError("");
      };
  
    return (
<div className="big-container">
  <div className="m-5 container-fluid payment-container">
    <div className="row">

      <div className="col-lg-6">
        <h2>Personal Information</h2>

        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="form-control" id="firstName" placeholder="Enter your first name"  />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" placeholder="Enter your address" />
        </div>

        <div className="form-group">
          <label htmlFor="postalCode">Postal code</label>
          <input type="text" className="form-control" id="postalCode" placeholder="Enter your postal code" />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" className="form-control" id="city" placeholder="Enter your city" />
        </div>

        <h2>Payment Method</h2>

        <div className="form-check ">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="bankCard"
            checked={paymentMethod === "bankCard"}
            onChange={() => handlePaymentMethod("bankCard")}
          />
          <label className="form-check-label" htmlFor="bankCard">
            Bank Card
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input "
            type="checkbox"
            value=""
            id="swish"
            checked={paymentMethod === "swish"}
            onChange={() => handlePaymentMethod("swish")}
          />
          <label className="form-check-label " htmlFor="swish">
            Swish
          </label>
        </div>

      </div>

      <div className="col-lg-6">
        {paymentMethod === "bankCard" && (
          <div>
            <div className="form-group">
              <label htmlFor="bankCardNumber">Bank Card Number</label>
              <input type="text" className="form-control" id="bankCardNumber" placeholder="Enter your bank card number"
               onChange={handleCardNumberChange}/>
            </div>

            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input type="text" className="form-control" id="expiryDate" placeholder="MMYY"
                    onChange={handleExpiryDateChange} />
            </div>

            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="text" className="form-control" id="cvv" placeholder="Enter your CVV" 
               onChange={handleCvvChange}/>
            </div>
          </div>
        )}

        {paymentMethod === "swish" && (
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input type="text" className="form-control" id="mobileNumber" placeholder="Enter your mobile number" />
          </div>
        )}

<div className="m-5">Total sum : {totalSum}</div>
{validationError && <div className="text-danger">{validationError}</div>}
            <button className="btn btn-primary" disabled={!paymentMethod} onClick={handleOrder}>
              Order
            </button>


            {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Order placed successfully!</p>
            <p>Your order will be delivered in approximately: {deliveryTime} min</p>
          </div>
        </div>
      )}
      </div>


   

    </div>
  </div>

  
    
</div>
);
}
  
  export default InputPaymentDetails;