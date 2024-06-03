import React, { useState, useEffect } from "react";
import "../../css/Cart.css";

function OrderContainer() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/tempCart")
      .then((res) => res.json())
      .then((data) => {
        const newListWithQuantity = countProducts(data);
        setOrder(newListWithQuantity);
      });
  }, []);

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

  function increaseQuantity(productId) {
    setOrder(
      order.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }

  function decreaseQuantity(productId) {
    setOrder(
      order.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  }

  const calculateTotalPrice = (product) => {
    return product.price * product.quantity;
  };

  function calculateTotalCartPrice() {
    return order.reduce(
      (total, product) => total + calculateTotalPrice(product),
      0
    );
  }

  return (
    <div className="your-order-container">
      <div className="container">
        <div className="header">
          <div className="row">
            <div className="col-4"> Hej Products</div>
            <div className="col-2">Price</div>
            <div className="col-2">Quantity</div>
            <div className="col-2 border border-danger">Total</div>
          </div>
        </div>

        {order.map((product) => (
          <div key={product.id} className="row product">
            <div className="col-4">
              <img
                className="product-image"
                src={product.image}
                alt={product.title}
              />
              <div>{product.title}</div>
            </div>
            <div className="col-2">{product.price}</div>
            <div className="col-2">
              <button
                className="btn btn-sm btn-danger"
                onClick={() => decreaseQuantity(product.id)}
              >
                -
              </button>
              {product.quantity}
              <button
                className="btn btn-sm btn-success"
                onClick={() => increaseQuantity(product.id)}
              >
                +
              </button>
            </div>
            <div className="col-2 border border-primary">
              {calculateTotalPrice(product)}
            </div>
          </div>
        ))}
      </div>

      <div className="sum-container">
        <div>Total sum</div>
        <div>{calculateTotalCartPrice().toFixed(2)}</div>
      </div>
    </div>
  );
}

export default OrderContainer;
