import React, { Component } from "react";
import ProductCard from "./ProductCard";
import Axios from "axios";

import "../Styles/ForWomen.scss";

class ForMen extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:3000/men").then(response =>
      this.setState({ products: response.data })
    );
  }

  render() {
    const { products } = this.state;
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
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ForMen;
