import React, { Component } from "react";
import ProductCard from "./ProductCard";
import Axios from "axios";

import "../Styles/ForWomen.scss";

class ForWomen extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      currentProduct: ""
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:3000/women").then(response =>
      this.setState({ products: response.data })
    );
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <p className="display-category-women">for Her</p>
        <div className="display-options">
          <button className="left-btn">Filter</button>
          <button>Sort</button>
        </div>
        <div className="working-area">
          <div className="products">
            {products.map(product => (
              <div key={product.id}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <div className="more-info"></div>
        </div>
      </div>
    );
  }
}

export default ForWomen;
