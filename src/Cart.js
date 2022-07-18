import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementItemQuantity,
  decrementItemQuantity
} from "./store/store";

function fixDigitToTwo(value) {
  return Math.round(value * 1e2) / 1e2;
}

const Cart = () => {
  let cartItems = useSelector((state) => state.products.cartItems),
    totalPrice = cartItems.reduce(
      (acc, cartItem) =>
        acc +
        fixDigitToTwo(
          cartItem.quantity * (cartItem.discountPrice || cartItem.price)
        ),
      0
    ),
    dispatch = useDispatch(),
    handleQuantityChange = (e, cartItem) => {
      let { value } = e.target,
        dispatchFunction;
      if (value > cartItem.quantity) dispatchFunction = incrementItemQuantity;
      else dispatchFunction = decrementItemQuantity;
      dispatch(dispatchFunction(cartItem));
    };
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          Your Cart
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        {cartItems.length ? (
          <>
            {cartItems.map((cartItem, index) => {
              return (
                <figure className="itemside mb-4" key={index}>
                  <div className="aside">
                    <img
                      src={cartItem.thumbnail}
                      className="border img-sm rounded"
                    />
                  </div>
                  <figcaption className="info text-start">
                    <button
                      className="btn btn-icon btn-sm btn-light float-end"
                      onClick={() => dispatch(removeFromCart(cartItem))}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                    <p> {cartItem.name}</p>
                    <div className="d-flex align-items-center justify-content-between input-group input-group-sm">
                      <input
                        type="number"
                        step="1"
                        className="form-control mw-25"
                        autoComplete="off"
                        placeholder=""
                        value={cartItem.quantity}
                        min="1"
                        onChange={(e) => handleQuantityChange(e, cartItem)}
                      />
                      <span className="price">
                        {" "}
                        <i className="fa-solid fa-euro-sign"></i>
                        {fixDigitToTwo(
                          cartItem.quantity *
                            (cartItem.discountPrice || cartItem.price)
                        )}
                      </span>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
            <p className="mb-3 text-center">
              {" "}
              Total:{" "}
              <strong className="text-danger">
                <i className="fa-solid fa-euro-sign"></i>
                {fixDigitToTwo(totalPrice)}
              </strong>{" "}
            </p>
            <div className="mb-3">
              <a href="#" className="btn w-100 btn-success">
                {" "}
                Checkout{" "}
              </a>
            </div>
          </>
        ) : (
          <div className="container">
            <p className="mb-3 text-center">No items in the cart</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
