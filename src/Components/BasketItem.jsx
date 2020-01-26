import React from "react";

const BasketItem = props => (
  <div>
    <span>{props.quantity}</span>
    <span>{props.img}</span>
    <span>{props.title}</span>
    <span>{props.price}</span>
  </div>
);

export default BasketItem;
