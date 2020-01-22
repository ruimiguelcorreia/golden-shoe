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

  // componentDidUpdate(prevProps) {
  //   const { search } = this.props.location;

  //   if (prevProps.location.search !== search) {
  //     Axios.get(`http://localhost:3000/women${search}`)
  //       .then(({ data: products }) => this.setState({ products }))
  //       .catch(err => console.error(err));
  //   }
  // }

  // buildQueryString = (operation, valueObj) => {
  //   const {
  //     location: { search }
  //   } = this.props;

  //   const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
  // };

  render() {
    const { products } = this.state;
    return (
      <div>
        <p className="display-category">for Her</p>
        <div className="display-options">
          <button className="left-btn">Filter</button>
          {/* <div className="filter-dropwdown">
            <Link to={`/for-women/?query={"type":"Boots"}`}>Boots</Link>
          </div> */}
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
