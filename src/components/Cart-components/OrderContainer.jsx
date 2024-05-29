import React from "react";

function OrderContainer() {
  return (
    <div className="shopping-cart">
      <div className="header row">
        <div className="col-xs-6">Products</div>
        <div className="col-xs-2">Quantity</div>
        <div className="col-xs-4">Total</div>
      </div>
      {products.map((product) => (
        <div key={product.id} className="product row">
          <div className="col-xs-6">
            <img src={product.image} alt={product.name} />
            {product.name}
          </div>
          <div className="col-xs-2">
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
          <div className="col-xs-4">
            ${calculateTotalPrice(product).toFixed(2)}
          </div>
        </div>
      ))}
      <div className="total row">
        <div className="col-xs-8">Total</div>
        <div className="col-xs-4">${calculateTotalCartPrice().toFixed(2)}</div>
      </div>
    </div>
  );
}

export default OrderContainer;
