
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

function App() {
  const [signedInUser, setSignedInUser] = useState(null);



  return (
    <Router>

      <div className="app-container">
      <MyNavBar  signedInUser={signedInUser} />
   
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/payment" element={<Payment />} />

        
        <Route path="/signIn" element={<SignIn setSignedInUser={setSignedInUser} />} />


        <Route path="/register" element={<Registration />} />
        
    </Routes>


<Footer signedInUser={signedInUser} setSignedInUser={setSignedInUser}/>
    </div>
    </Router>

 
  );
}

export default App;
