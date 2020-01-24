import React, { Component } from "react";

import ProductComp from "./ProductComp";

import "../Styles/ProductCard.scss";

class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      currentProductRender: false
    };
  }

  onViewProduct = () => {
    this.setState({
      currentProductRender: true
    });
  };

  render() {
    return (
      <div className="ProductCard">
        <span className="product-image">
          <button className="more-button" onClick={this.onViewProduct}>
            <ion-icon name="ios-more" />
          </button>
          <img src={this.props.img} alt="Selected Product" />
        </span>
        <span className="product-name">
          <p>{this.props.title}</p>
        </span>
        <span className="product-price">
          <p>£ {this.props.price}</p>
        </span>
        {this.state.currentProductRender && (
          <ProductComp {...this.props} className="extra-bit" />
        )}
      </div>
    );
  }
}

export default ProductCard;
