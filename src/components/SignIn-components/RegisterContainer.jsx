import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import "../../css/Register.css";

function RegisterContainer()
 {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handlefirstNameChange(e) {
    const value = e.target.value;
    setFirstName(value);
   
  }
  function handleLastNameChange(e) {
    const value = e.target.value;
    setLastName(value);
   
  }

  function handleCityChange(e) {
    const value = e.target.value;
    setCity(value);
   
  }

  function handlePostalCodeChange(e) {
    const value = e.target.value;
    setPostalCode(value);
   
  }

  function handleAddressChange(e) {
    const value = e.target.value;
    setAddress(value);
   
  }



  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);
   
  }
  
  function handleUsernameChange(e) {
    const value = e.target.value;
    setUsername(value);
  
  }


  function handlePasswordChange(e) {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(newPassword.length >= 5);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !username || !password) {
      setError("Email, username, and password are required fields.");
      return;
    }

    const newUser = {
      id: Date.now(), 
      firstName,
      lastName,
      address,
      postalCode,
      city,
      username,
      email,
      password,
      cart: [], 
      favorites: []
    }

    
      
      const postOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      }


      fetch("http://localhost:3000/users",postOptions) .then(response => {
        setShowSuccessModal(true);

      });;
   
      }

      function handleCloseModal() {
        setShowSuccessModal(false);
        navigate("/"); 
      }
  
  

    


    

  return (
    <>
    <div className="container my-5">
    
      <div className="row justify-content-center">
        <div className="col-lg-6 bg-light p-5">
          <h2 className="mb-4">Register</h2>
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                  
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter your first name"
                    onChange={handlefirstNameChange}
                
                  />
               
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter your last name"
                    onChange={handleLastNameChange}
                    
                  />
                  
                 
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                  
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter your address"
                    onChange={handleAddressChange}
             
                  />
              
                </div>

                <div className="mb-3">
                  <label htmlFor="postalCode" className="form-label">
                    Postal Code
                  </label>
                  <input
               
                    type="text"
                    className="form-control"
                    id="postalCode"
                    placeholder="Enter your postal code"
                    onChange={handlePostalCodeChange}
                  />
                  
                
                </div>

                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input
                   
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="Enter your city"
                    onChange={handleCityChange}
                  />
                
                </div>
       

            
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                  
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    onChange={handleEmailChange}
                  />
                 
                </div>
            

             
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    Username:
                  </label>
                  <input
                   
                    type="username"
                    className="form-control"
                    id="username"
                    placeholder="Enter your username"
                    onChange={handleUsernameChange}
                  />
                    
                </div>
          

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                 
                    type="password"
                    className={`form-control ${isPasswordValid ? 'is-valid' : 'is-invalid'}`}
                    id="password"
                    placeholder="Enter your password"
                    onChange={handlePasswordChange}
                  />
                  {!isPasswordValid && <div className="invalid-feedback">Password must be at least 5 characters long.</div>}
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary " disabled={!isPasswordValid}>
                  Register
                </button>
              </div>
            </form>
          </div>
         
     

        </div>
       
      </div>
    

    </div>
    {showSuccessModal ? (
         <Modal show={showSuccessModal} className="registration-modal" onHide={handleCloseModal} centered >
         <Modal.Header closeButton>
           <Modal.Title className="modal-title">Registration suceeded!  </Modal.Title>
         </Modal.Header>
         <Modal.Body >
    
         </Modal.Body>
      
     
       </Modal>
      ):null}
</>
  );
}

export default RegisterContainer;

