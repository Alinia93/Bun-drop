import React, { useState, useEffect } from "react";
import "../../css/Cart.css";
import {  useNavigate } from "react-router-dom"; 

function OrderContainer({signedInUser}) {


  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  
    if (signedInUser !== null) 
      {
        const userCart = JSON.parse(localStorage.getItem(`cart_${signedInUser.id}`)) || [];
      const newListWithQuantity = countProducts(userCart);
      setOrder(newListWithQuantity);
     
     
    } else {
     
      const tempCart = JSON.parse(localStorage.getItem("tempCart")) || [];
      const newListWithQuantity = countProducts(tempCart);
      setOrder(newListWithQuantity);
    }
  }, [signedInUser]);




  function countProducts(products) {
    const productMap = new Map();

    products.forEach((product) => {
      if (productMap.has(product.id)) {
        productMap.get(product.id).quantity += 1;
      } else {
        productMap.set(product.id, { ...product, quantity: 1 });
      }
    });

    return Array.from(productMap.values());
  }

  function increaseQuantity(productId) 
  {
    setOrder((cart) => {
      const updatedOrder = cart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      updateCartInLocalStorage(updatedOrder);
      return updatedOrder;
    });
  }
    

    function decreaseQuantity(productId) 
    {
      setOrder((cart) => {
        const updatedOrder = cart
          .map((product) =>
            product.id === productId
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0);
        updateCartInLocalStorage(updatedOrder);
        return updatedOrder;
      });
    }
  



  function updateCartInLocalStorage(updatedOrder) {
    if (signedInUser !== null) {
      localStorage.setItem(`cart_${signedInUser.id}`, JSON.stringify(updatedOrder));
    } else {
      localStorage.setItem("tempCart", JSON.stringify(updatedOrder));
    }
  }


  function calculateTotalPrice(product)
  {
    return product.price * product.quantity;
  };

  function calculateTotalCartPrice() {
    return order.reduce(
      (total, product) => total + calculateTotalPrice(product),
      0
    );
  }

  function handleCheckout() {
    const totalSum = calculateTotalCartPrice().toFixed(2);
    const products = order;
    navigate("/payment", { state: { totalSum,products } }); 
  }

  return (
    <>
       
    <h1 className="text-center mb-5 >Your order">Your order </h1>
    <div className="your-order-container">
    <div className="container">
      <div className="header ">
        <div className="row">
          <div className="col-md-3 col-4 header-item product-header">Products</div>
          <div className="col-2 header-item price-header">Price</div>
          <div className="col-md-2 col-4  quantity-header">Quantity</div>
          <div className="col-2 header-item">Total</div>
        </div>
      </div>

    <div className="product-container">
      {order.map((product) => (
       
        <div key={product.id} className="row product ">
          <div className="col-md-4  col-5">
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <div>{product.title}</div>
          </div>
          <div className=" product-price  col-2">{product.price}</div>
          <div className="col-md-2 col-4 quantity-controls ">
            <button
              className="btn btn-sm btn-danger"
              onClick={() => decreaseQuantity(product.id)}
            >
              -
            </button>
            <span>{product.quantity}</span>
            <button
              className="btn btn-sm btn-success"
              onClick={() => increaseQuantity(product.id)}
            >
              +
            </button>
          </div>
          <div className="col-md-2 col-2  text-center">{calculateTotalPrice(product)}</div>
        </div>
   
      ))}
          </div>
    </div>

    <div className="sum-container">
      <div className="m-2">
        <p>Total sum:</p></div>
      <div className="m-2 "><p className="fw-bold">{calculateTotalCartPrice().toFixed(2)}</p></div>
      <button className="btn btn-primary" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  </div>
    </>
  )
}

export default OrderContainer;