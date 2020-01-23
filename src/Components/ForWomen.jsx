import React, { Component } from "react";
import ProductCard from "./ProductCard";
import Axios from "axios";
import { Link } from "react-router-dom";
import qs from "qs";

import "../Styles/ForWomen.scss";

class ForWomen extends Component {
  constructor() {
    super();
    this.state = {
      products: []
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
        <p className="display-category">for Her</p>
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

export default ForWomen;
