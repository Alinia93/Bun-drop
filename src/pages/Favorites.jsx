import React,{useState,useEffect} from "react";
import MyNavBar from "../components/UsedOnManyPages/MyNavBar";
import "../css/Favorites.css"
import Footer from "../components/UsedOnManyPages/Footer";
import MenuModal from "../components/Menu-components/MenuModal";

function Favorites({signedInUser,notify}) {

  const [favorites, setFavorites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (signedInUser !== null) {
      fetch(`http://localhost:3000/users/${signedInUser.id}`)
        .then((res) => res.json())
        .then((user) => {
          const signedInUser = user;
          setFavorites(signedInUser.favorites); // Uppdatera favoriter med användarens favoriter
        });
    }
  }, [signedInUser]);

  function handleClose() {
    setShowModal(false);
  }

  function handleClick(product) {
    setSelectedItem(product);
    setShowModal(true);
  }

 function handleOrder()
  {
    if (signedInUser != null) {
      let userCart = JSON.parse(localStorage.getItem(`cart_${signedInUser.id}`)) || [];
    
      userCart.push(selectedItem);
      

      localStorage.setItem(`cart_${signedInUser.id}`, JSON.stringify(userCart));
 
      notify();
      handleClose();
  }
  else 
  {
  
    let tempCart = JSON.parse(localStorage.getItem('tempCart')) || [];
    tempCart.push(selectedItem);
    localStorage.setItem('tempCart', JSON.stringify(tempCart));
    notify();
    handleClose();
  }
  }



return(
  <div className="favorites-page-container">
   
      <div className="container my-5">
        <h1 className="text-center mb-4">My Favorites</h1>

        <div className="row">
          {favorites.length === 0 ? (
            <p>You have no favorites</p>
          ) : (
            favorites.map(product => (
              <div
                key={product.id}
                className="col-6 col-md-3 mb-4"
                style={{ cursor: 'pointer' }}
                
              >
                <div onClick={() => handleClick(product)}className="card">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {selectedItem ? (
          <MenuModal
            showModal={showModal}
            handleOrder={handleOrder}
            handleClose={handleClose}
            selectedItem={selectedItem}
            signedInUser = {signedInUser}
            isOnFavoritePage ={true}
            setFavorites = {setFavorites}
          
          />
        ) : null}
    </div>
)
}

export default Favorites;
