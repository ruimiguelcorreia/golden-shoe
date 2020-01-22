import React from "react";

import "../Styles/ProductCard.scss";

const ProductCard = props => (
  <div className="ProductCard">
    <span className="product-image">
      <img src={props.img} alt="Selected Product" />
    </span>
    <span className="product-name">
      <p>{props.title}</p>
    </span>
    <span className="product-price">
      <p>£ {props.price}</p>
    </span>
  </div>
);

export default ProductCard;
