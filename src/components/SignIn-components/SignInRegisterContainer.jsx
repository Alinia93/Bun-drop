
import { Link } from "react-router-dom";
import React,{useState} from "react";




import burgerImage from '../../images/burger_1.png';

function SignInRegisterContainer() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    function handleEmailChange(e) {
        setEmail(e.target.value);
      }
    
      function handlePasswordChange(e) {
        setPassword(e.target.value);
      }


      function handleSubmit(e) {
        e.preventDefault();
    
        fetch("http://localhost:3000/users")
          .then(response => response.json())
          .then(data => {
           


            const user = data.find(
              user =>
                user.email === email && user.password === password
            );
    
            if (user) {
           localStorage.setItem('signedInUser', JSON.stringify(user));
              console.log("Inloggning lyckades!");
         
            } else {
             
              setErrorMessage("Felaktigt e-post eller lösenord.");
              console.log("fel")
            }
          })
          .catch(error => {
            console.error("Ett fel inträffade:", error);
          });
      }



  
  return (
    <div className="container m-3">
      <div className="row justify-content-center mx-auto">
        <div className="col-md-6 col-lg-6 p-5 bg-black bg-opacity-25 text-white">
          <h2>Sign in</h2>
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Sign in
            </button>
          </form>
        </div>
        <div className="col-md-6 p-5 bg-beige">
          <img src={burgerImage} alt="Burger" className="img-fluid mb-4" />
          <p>No account?</p>
          <Link to="/register">
          <button type="button" className="btn btn-light">
            Register
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default SignInRegisterContainer;