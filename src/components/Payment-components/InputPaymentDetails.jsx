import React, { useState,useEffect } from "react";

import { useNavigate } from "react-router-dom";

import "../../css/Payment.css";
import OrderSuccessfullyModal from "./OrderSuccesfullyModal";


function InputPaymentDetails({totalSum, products, signedInUser}) 
{

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [showCardForm, setShowCardForm] = useState(false);
    const [showSwishForm, setShowSwishForm] = useState(false);
    const navigate =useNavigate();



    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");

    const [cardNumberError,setCardNumberError]=useState("");
    const [dateError,setDateError]=useState("");
    const[cvvError,setCvvError]=useState("");
   
    const [modalVisible, setModalVisible] = useState(false);

    const isDisabled =
    !paymentMethod ||
    !firstName ||
    !lastName ||
    !address ||
    !postalCode ||
    !city ||
    (paymentMethod === "bankCard" && (cardNumberError || dateError || cvvError || !cardNumber || !expiryDate || !cvv)) ||
    (paymentMethod === "swish" && (phoneNumberError || !phoneNumber));



    useEffect(() => {
      if (signedInUser !== null) {
        fetch(`http://localhost:3000/users/${signedInUser.id}`)
          .then((res) => res.json())
          .then((user) => {
            const signedInUser = user;
             
        setFirstName(signedInUser.firstName || "");
        setLastName(signedInUser.lastName || "");
        setAddress(signedInUser.address || "");
        setPostalCode(signedInUser.postalCode || "");
        setCity(signedInUser.city || "");
          });
      }
    }, [signedInUser]);
  

    

    function handlePhoneNumberChange(e) {
      const input = e.target.value.replace(/\D/g, ''); 
      if (input.length === 10) {
        setPhoneNumber(input);
        setPhoneNumberError("");
      } else {
        setPhoneNumberError("Phone number needs to be 10 digits.");
      }
    }



    function handlePaymentMethod(method)
    {
      setPaymentMethod(method);
    
      if (method === "bankCard") {
        setShowCardForm(true);
        setShowSwishForm(false);
        setPhoneNumber("");
      } else if (method === "swish") {
        setShowSwishForm(true);
        setShowCardForm(false);
      }
    }

    function handleCardNumberChange(e)
    {
      const input = e.target.value;
      const cardNumber = input.replace(/\D/g, ''); 
     
      if (cardNumber.length === 16) {
        setCardNumber(cardNumber);
        setCardNumberError("");
      } else {
       setCardNumberError("Card number needs to be 16 digits");   
      }
      };

    function handleExpiryDateChange(e) 
    {
      const input = e.target.value.replace(/\D/g, ''); 
      if (
        input.length === 4 &&
        !isNaN(input) &&
        parseInt(input.slice(0, 2)) <= 12 &&
        parseInt(input.slice(2, 4)) >= new Date().getFullYear().toString().slice(2)
      ) {
        setExpiryDate(input);
        setDateError(""); 
      } else {
        setDateError("Invalid expiry date.");
      }
    };
    
      function handleCvvChange(e)
       {
        const input = e.target.value.replace(/\D/g, ''); 

        if (input.length === 3 && !isNaN(input)) {
          setCvv(input);
          setCvvError(""); 
        } else {
          setCvvError("CVV must be exactly 3 digits."); 
        }
      };


      function handleCloseModal() {
        setModalVisible(false);
        navigate("/");

      }

      function handleOrder()
      {
        
        if (signedInUser !== null) {
          localStorage.removeItem(`cart_${signedInUser.id}`);
          localStorage.removeItem('tempCart');
        } else {
          localStorage.removeItem('tempCart');
        }
        setModalVisible(true);
       
      }
    
    
     
    
        
  
    return (
      <>
      
<h1 className="text-center mb-4">Check out</h1>
<div className="big-container  position-relative">

  <div className="  container-fluid payment-container ">
    <div className="row ">

      <div className="col-lg-6 ">
        <div className="personal-information-container ">
        <h2>Personal Information</h2>

        <div className="form-group ">
          <label className="label-text">First Name</label>
          <input 
          type="text" 
          className="form-control" 
          id="firstName" 
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
         
           />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" className="form-control" id="lastName" placeholder="Enter your last name"  value={lastName}   
              onChange={(e) => setLastName(e.target.value)}/>
        </div>

        <div className="form-group">
          <label >Address</label>
          <input type="text" className="form-control" id="address" placeholder="Enter your address"  value={address}
           onChange={(e) => setAddress(e.target.value)} />
        </div>

        <div className="form-group">
          <label >Postal code</label>
          <input type="text" className="form-control" id="postalCode" placeholder="Enter your postal code" value={postalCode}
           onChange={(e) => setPostalCode(e.target.value)} />
        </div>

        <div className="form-group">
          <label >City</label>
          <input type="text" className="form-control" id="city" placeholder="Enter your city" value={city}
           onChange={(e) => setCity(e.target.value)} />
        </div>

        </div>

        <h2 className="payment-method-text" >Payment Method</h2>

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
            className=" form-check-input "
            type="checkbox"
            value=""
            id="swish"
            checked={paymentMethod === "swish"}
            onChange={() => handlePaymentMethod("swish")}
          />
          <label className="form-check-label ">
            Swish
          </label>
        </div>

      </div>

      <div className="col-lg-6">
        {paymentMethod === "bankCard" ? (
          <div>
            <div className="form-group swish-bank-container ">
              <label htmlFor="bankCardNumber">Bank Card Number</label>
              <input type="text" className="form-control" id="bankCardNumber" placeholder="Enter your bank card number"
               onChange={handleCardNumberChange}/>
               {cardNumberError}
            </div>

            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input type="text" className="form-control" id="expiryDate" placeholder="MMYY"
                    onChange={handleExpiryDateChange} />
                     {dateError}
            </div>

            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="text" className="form-control" id="cvv" placeholder="Enter your CVV" 
               onChange={handleCvvChange}/>
               {cvvError}
            </div>
          </div>
        ):null}


        {paymentMethod === "swish" ? (
          <div className="form-group swish-bank-container ">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input type="text" className="form-control" id="mobileNumber" placeholder="Enter your mobile number" onChange={handlePhoneNumberChange}  />
          </div>
        ):null}
         {phoneNumberError && <span className="error-text">{phoneNumberError}</span>}

<div className="m-5  fw-bold">Total sum : {totalSum}</div>

            <button className={`order-btn ${isDisabled ? 'disabled' : ''}`} onClick={handleOrder} >
              Order
            </button>
      </div>


   

    </div>
  </div>


 
    
</div>
<OrderSuccessfullyModal products={products} showModal={modalVisible} handleClose={handleCloseModal} />
</>
);
}
  
  export default InputPaymentDetails;