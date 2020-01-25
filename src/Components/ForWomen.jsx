import React, { Component } from "react";
import ProductCard from "./ProductCard";
import ProductComp from "./ProductComp";
import Axios from "axios";
import Link from "react-router-dom";

import "../Styles/ForWomen.scss";

class ForWomen extends Component {
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
      params: { for: "women" }
    }).then(response => {
      this.setState({ products: response.data });
    });
  }

  handleViewProduct = event => {
    this.setState({ isProductSelected: true, currentProductRender: event });
  };

  render() {
    const { isProductSelected, products } = this.state;
    return (
      <div>
        <p className="display-category-women">for Her</p>
        <div className="display-options">
          <span className="left-side">
            Filter:
            <label>
              By Type:{" "}
              <select>
                <option> </option>
                <Link to value="boots">
                  Boots
                </Link>
                <option value="knee-high boots">Knee-High Boots</option>
                <option value="ankle-boots">Ankle Boots</option>
                <option value="trainers">Trainers</option>
                <option value="loafers">Loafers</option>
              </select>
            </label>
            <label>
              By Color:{" "}
              <button value="black" className="color-button black"></button>
              <button value="beige" className="color-button beige"></button>
              <button value="white" className="color-button white"></button>
              <button
                value="light-pink"
                className="color-button light-pink"
              ></button>
              <button value="cream" className="color-button cream"></button>
              <button
                value="dark-brown"
                className="color-button dark-brown"
              ></button>
            </label>
          </span>
          <span className="right-side">
            Sort:
            <button>Price Ascending</button>
            <button>Price Descending</button>
          </span>
        </div>
        <div className="working-area">
          <div className="products">
            {products.map(product => (
              <div key={product.id}>
                <ProductCard
                  {...product}
                  onViewProduct={this.handleViewProduct}
                />
              </div>
            ))}
          </div>
          {isProductSelected && (
            <ProductComp {...this.state.currentProductRender} />
          )}
        </div>
      </div>
    );
  }
}

export default ForWomen;
