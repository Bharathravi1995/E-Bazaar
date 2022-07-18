import React from "react";
import { useSelector } from "react-redux";
const NavBar = () => {
  let cartLength = useSelector((state) => state.products.cartItems.length);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-sm">
        <a className="navbar-brand" href="#">
          E-Bazaar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <button
            className="btn btn-outline-primary"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            type="submit"
          >
            {" "}
            <i className="fa-solid fa-cart-shopping"></i> Cart{" "}
            {cartLength > 0 ? <span>({cartLength})</span> : ""}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
