import React from "react";

import "../Styles/BasketItem.scss";

const BasketItem = props => (
  <div className="BasketItem">
    <span className="text">{props.quantity} x</span>
    <span>
      <img src={props.img} alt="Selected Item" className="basket-img" />
    </span>
    <span className="text">{props.title}</span>
    <span className="text">£ {props.price}</span>
  </div>
);

export default BasketItem;
