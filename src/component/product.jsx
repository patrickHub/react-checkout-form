import React, { Component } from "react";

const Product = ({ product }) => {
  return (
    <li
      key={product.id}
      className="list-group-item d-flex justify-content-between lh-condensed"
    >
      <div>
        <h6 className="my-0">{product.name}</h6>
        <small className="text-muted">{product.description}</small>
      </div>
      <span className="text-muted">CHF {product.price}.00</span>
    </li>
  );
};

export default Product;
