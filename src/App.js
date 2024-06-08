
import React,{useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/UsedOnManyPages/MyNavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Menu from "./pages/Menu";
import Payment from "./pages/Payment";
import Registration from "./pages/Registration";
import SignIn from "./pages/SignIn";
import Footer from "./components/UsedOnManyPages/Footer";
import {  ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function App() {

  const notify = () => toast.success("Order added to cart!");

  const favoritesNotify =() =>toast.success("Added to favorites!");

  const [signedInUser, setSignedInUser] = useState(null);

  return (
    <Router>

      <div className="app-container">
      <MyNavBar  signedInUser={signedInUser} />
   
      <Routes>
        <Route path="/" element={<Home />} />

        <Route  path="/cart" element={<Cart signedInUser={signedInUser} setSignedInUser={setSignedInUser}/>} />

        <Route path="/favorites" element={<Favorites notify={notify} signedInUser={signedInUser} />} />

        <Route path="/menu" element={<Menu notify={notify} favoritesNotify={favoritesNotify} signedInUser={signedInUser} setSignedInUser={setSignedInUser} />} />

        <Route path="/payment" element={<Payment  signedInUser={signedInUser}/>} />

        
        <Route path="/signIn" element={<SignIn setSignedInUser={setSignedInUser} />} />


        <Route path="/register" element={<Registration />} />
        
    </Routes>
<ToastContainer/>

<Footer signedInUser={signedInUser} setSignedInUser={setSignedInUser}/>
    </div>
    </Router>

 
  );
}

export default App;
