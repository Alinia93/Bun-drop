import React,{useState,useEffect} from "react";
import MyNavBar from "../components/UsedOnManyPages/MyNavBar";
import "../css/Favorites.css"
import Footer from "../components/UsedOnManyPages/Footer";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

    const storedUser = JSON.parse(localStorage.getItem('signedInUser'));

    if (storedUser) {

      setFavorites(storedUser.favorites);
    }
  }, []);



 function handleClick(){

  }
return(
  <div className="favorites-page-container">
      <MyNavBar />
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
                onClick={() => handleClick(product)}
              >
                <div className="card">
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
      <Footer/>
    </div>
)
}

export default Favorites;
