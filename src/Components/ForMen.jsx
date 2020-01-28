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
      filteredType: "",
      filteredColor: "",
      sortPrice: "",
      currentProductRender: {},
      isProductSelected: false
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:3000/products", {
      params: { for: "men" }
    }).then(response => {
      this.setState({ products: response.data });
    });
  }

  handleViewProduct = event => {
    this.setState({ isProductSelected: true, currentProductRender: event });
  };

  handleBoxClosing = event => {
    this.setState({ isProductSelected: false });
  };

  handleFilter(type, color, price) {
    const typeValue = type ? type.target.value : this.state.filteredType;
    const typeColor = color ? color.target.value : this.state.filteredColor;
    const typePrice = price ? price.target.value : this.state.sortPrice;
    this.setState({
      filteredType: typeValue,
      filteredColor: typeColor,
      sortPrice: typePrice
    });

    Axios.get("http://localhost:3000/products", {
      params: {
        for: "men",
        type: typeValue,
        color: typeColor,
        price: typePrice
      }
    }).then(response => this.setState({ products: response.data }));
  }

  render() {
    const { isProductSelected, products } = this.state;
    return (
      <div>
        <p className="display-category-men">for Him</p>
        <div className="display-titles">
          <span className="left-side">
            <span className="display-category">Filter</span>
            <div className="display-options">
              <span>By Type: </span>
              <div>
                <select onChange={e => this.handleFilter(e)}>
                  <option> </option>
                  <option value="boots">Boots</option>
                  <option value="shoes">Shoes</option>
                  <option value="trainers">Trainers</option>
                </select>
              </div>
              <span>By Color: </span>
              <div>
                <button
                  value="black"
                  className="color-button black"
                  onClick={e => this.handleFilter(undefined, e)}
                ></button>
                <button
                  value="burgundy"
                  className="color-button burgundy"
                  onClick={e => this.handleFilter(undefined, e)}
                ></button>
                <button
                  value="white"
                  className="color-button white"
                  onClick={e => this.handleFilter(undefined, e)}
                ></button>
                <button
                  value="dark brown"
                  className="color-button dark-brown"
                  onClick={e => this.handleFilter(undefined, e)}
                ></button>
                <button
                  value="dark blue"
                  className="color-button dark-blue"
                  onClick={e => this.handleFilter(undefined, e)}
                ></button>
                <button
                  value="ochre"
                  className="color-button ochre"
                  onClick={e => this.handleFilter(undefined, e)}
                ></button>
                <button
                  value="light grey"
                  className="color-button light-grey"
                  onClick={e => this.handleFilter(undefined, e)}
                ></button>
                <button
                  value="grey marl"
                  className="color-button grey-marl"
                  onClick={e => this.handleFilter(undefined, e)}
                ></button>
              </div>
            </div>
          </span>
          <span className="right-side">
            Sort by Price:
            <div className="asc-desc">
              <button
                value="ascending"
                onClick={e => this.handleFilter(undefined, undefined, e)}
              >
                &#9651;
              </button>
              <button
                value="descending"
                onClick={e => this.handleFilter(undefined, undefined, e)}
              >
                &#9661;
              </button>
            </div>
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
            <ProductComp
              {...this.state.currentProductRender}
              closeBox={this.handleBoxClosing}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ForMen;
