import React from "react";

import "../Styles/ProductComp.scss";

const ProductComp = props => (
  <div className="IndividualProduct">
    <span>{props.title}</span>
    <span>
      <img src={props.img} alt="Selected Shoe" className="viewer-img" />
    </span>
    <span>£ {props.price}</span>
    <select className="size-selector">
      {props.sizes.map(size => (
        <option key={size.key} value={size.value}>
          {size}
        </option>
      ))}
    </select>
    <button>Add to Basket</button>
  </div>
);

export default ProductComp;
