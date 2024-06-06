import React, { useState } from 'react';

function RegisterContainer()
 {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    city: "",
    email: "",
    password: "",
  });

  function handleFirstNameChange(e) {
    const value = e.target.value;
    setFirstName(value);
    setFormErrors(prev => ({ ...prev, firstName: value.trim() === "" ? "First name is required." : "" }));
  }

  function handleLastNameChange(e) {
    const value = e.target.value;
    setLastName(value);
    setFormErrors(prev => ({ ...prev, LastName: value.trim() === "" ? "Last name is required." : "" }));
  }

  function handleAddressChange(e) {
    const value = e.target.value;
    setAddress(value);
    setFormErrors(prev => ({ ...prev, address: value.trim() === "" ? "Address is required." : "" }));
  }

  function handlePostalCodeChange(e) {
    const value = e.target.value;
    setPostalCode(value);
    setFormErrors(prev => ({ ...prev, postalCode: value.trim() === "" ? "Postal code is required." : "" }));
  }

  function handleCityChange(e) {
    const value = e.target.value;
    setCity(value);
    setFormErrors(prev => ({ ...prev, city: value.trim() === "" ? "City is required." : "" }));
  }

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);
    setFormErrors(prev => ({ ...prev, email: value.trim() === "" ? "Email is required." : "" }));
  }
  
  function handleUsernameChange(e) {
    const value = e.target.value;
    setUsername(value);
    setFormErrors(prev => ({ ...prev, username: value.trim() === "" ? "Username is required." : "" }));
  }


  function handlePasswordChange(e) {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(newPassword.length >= 5);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
        firstName.trim() === "" ||
        lastName.trim() === "" ||
        address.trim() === "" ||
        postalCode.trim() === "" ||
        city.trim() === "" ||
        email.trim() === "" ||
        password.trim() === ""
      ) {
        setFormErrors({
            firstName: firstName.trim() === "" ? "First name is required." : "",
            lastName: lastName.trim() === "" ? "Last name is required." : "",
            address: address.trim() === "" ? "Address is required." : "",
            postalCode: postalCode.trim() === "" ? "Postal code is required." : "",
            city: city.trim() === "" ? "City is required." : "",
            email: email.trim() === "" ? "Email is required." : "",
            password: password.trim() === "" ? "Password is required." : "",
          });
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
        if (response.ok) {
          console.log('Användaren skapades framgångsrikt!');
         
        } else {
          console.error('Det uppstod ett fel vid skapandet av användaren.');
        }
      })
      .catch(error => {
        console.error('Ett fel inträffade:', error);
      });;

    }

  return (
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
                    value={firstName}
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter your first name"
                    onChange={handleFirstNameChange}
                  />
                  {formErrors.firstName && <div className="invalid-feedback">{formErrors.firstName}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    value={lastName}
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter your last name"
                    onChange={handleLastNameChange}
                  />
                  
                  {formErrors.lastName && <div className="invalid-feedback">{formErrors.firstName}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    value={address}
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter your address"
                    onChange={handleAddressChange}
                  />
              {formErrors.address && <div className="invalid-feedback">{formErrors.firstName}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="postalCode" className="form-label">
                    Postal Code
                  </label>
                  <input
                    value={postalCode}
                    type="text"
                    className="form-control"
                    id="postalCode"
                    placeholder="Enter your postal code"
                    onChange={handlePostalCodeChange}
                  />
                  
                  {formErrors.postalCode && <div className="invalid-feedback">{formErrors.firstName}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input
                    value={city}
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="Enter your city"
                    onChange={handleCityChange}
                  />
                   {formErrors.city && <div className="invalid-feedback">{formErrors.firstName}</div>}
                </div>
       

            
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    value={email}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    onChange={handleEmailChange}
                  />
                    {!formErrors.email && <div className="invalid-feedback">{formErrors.firstName}</div>}
                </div>
            

             
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    Username:
                  </label>
                  <input
                    value={username}
                    type="username"
                    className="form-control"
                    id="username"
                    placeholder="Enter your username"
                    onChange={handleUsernameChange}
                  />
                    {!formErrors.email && <div className="invalid-feedback">{formErrors.firstName}</div>}
                </div>
          

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    value={password}
                    type="password"
                    className={`form-control ${isPasswordValid ? 'is-valid' : 'is-invalid'}`}
                    id="password"
                    placeholder="Enter your password"
                    onChange={handlePasswordChange}
                  />
                  {!isPasswordValid && <div className="invalid-feedback">Password must be at least 5 characters long.</div>}
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterContainer;