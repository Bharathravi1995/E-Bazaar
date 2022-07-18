import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/store";

const ProductItem = ({ product }) => {
  let dispatch = useDispatch();
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img
          className="card-img-h-70 card-img-top"
          src={product.img}
          alt={product.name}
        />
        <div className="card-body p-4 border-top">
          <div className="text-start">
            <h5 className="fw-bolder">
              {product.name}
              {product.isNew && (
                <span className="float-end badge bg-warning">New</span>
              )}
            </h5>
            <p>
              <span className="h5">
                <i className="fa-solid fa-euro-sign"></i>
                {product.discountPrice || product.price}
              </span>
              {product.discountPrice && (
                <del className=" ms-1 text-sm text-muted">
                  <span>{product.price}</span>
                </del>
              )}
            </p>
            <p>
              <a
                className="btn btn-primary mt-auto"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to cart
              </a>{" "}
              {product.isShippingFree && (
                <span className="float-end text-muted small mt-2">
                  {" "}
                  <i className="fa fa-truck"></i> Free shipping{" "}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
