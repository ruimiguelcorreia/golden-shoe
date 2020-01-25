import React, { Component } from "react";
import ProductCard from "./ProductCard";
import ProductComp from "./ProductComp";
import Axios from "axios";

import "../Styles/ForWomen.scss";

class ForMen extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      currentProductRender: {},
      isProductSelected: false
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:3000/products", {
      params: { for: "men" }
    }).then(response => this.setState({ products: response.data }));
  }

  handleViewProduct = event => {
    this.setState({ isProductSelected: true, currentProductRender: event });
  };

  render() {
    const { isProductSelected, products } = this.state;
    return (
      <div>
        <p className="display-category-men">for Him</p>
        <div className="display-options">
          <button className="left-btn">Filter</button>
          <button>Sort</button>
        </div>
        <div className="products">
          {products.map(product => (
            <div key={product.id}>
              <ProductCard
                {...product}
                onViewProduct={this.handleViewProduct}
              />
            </div>
          ))}
          {isProductSelected && (
            <ProductComp {...this.state.currentProductRender} />
          )}
        </div>
      </div>
    );
  }
}

export default ForMen;
