import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SignInRegisterContainer from "../components/SignIn-components/SignInRegisterContainer";
import "../css/SignIn.css"
import MyNavBar from "../components/UsedOnManyPages/MyNavBar";
import Footer from "../components/UsedOnManyPages/Footer";

function SignIn({setSignedInUser}) {
    return (
      <>

      <SignInRegisterContainer setSignedInUser={setSignedInUser}/>
  
     
      </>
    );
  }
  
  export default SignIn;