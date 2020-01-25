import React, { Component } from "react";

import "../Styles/ProductComp.scss";

class ProductComp extends Component {
  constructor() {
    super();
    this.state = {
      product: {
        title: "",
        img: "",
        price: "",
        size: "",
        quantitity: ""
      }
    };
  }

  render() {
    const { title, img, price, sizes } = this.props;
    return (
      <div className="IndividualProduct">
        <span>{title}</span>
        <span>
          <img src={img} alt="Selected Shoe" className="viewer-img" />
        </span>
        <span>£ {price}</span>
        {/* <select className="size-selector">
          {sizes.map(size => (
            <option key={size.key} value={size.value}>
              {size}
            </option>
          ))}
        </select>
        <button>Add to Basket</button> */}
      </div>
    );
  }
}

export default ProductComp;
