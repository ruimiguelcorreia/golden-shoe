import React, { Component } from "react";

import "../Styles/ProductComp.scss";

class ProductComp extends Component {
  constructor() {
    super();
    this.state = {
      size: "",
      productIsSelected: false,
      quantity: 0,
      stock: 0
    };
  }

  handleSizeChange(event) {
    const selectedSize = this.props.sizes.find(
      size => size.number === event.target.value
    );

    this.setState({
      size: event.target.value,
      productIsSelected: true,
      quantity: 0,
      stock: selectedSize.stock
    });

    if (selectedSize.stock === 0) {
      alert("The selected item is out of stock.");
    }
  }

  handleQuantity(event) {
    console.log(event);
    const { quantity } = this.state;
    if (event.target.value === "inc") {
      this.setState({ quantity: quantity + 1 });
    } else {
      this.setState({ quantity: quantity - 1 });
    }
  }

  addToBasket = () => {
    if (this.state.size === "" || this.state.quantity === 0) {
      alert("No items are selected.");
    } else {
      const productsInBasket = localStorage.getItem("basket");
      const basket = productsInBasket ? JSON.parse(productsInBasket) : [];
      basket.push({
        id: this.props.id,
        title: this.props.title,
        img: this.props.img,
        price: this.props.price,
        quantity: this.state.quantity,
        size: this.state.size
      });
      localStorage.setItem("basket", JSON.stringify(basket));
    }
  };

  render() {
    const { title, img, price, sizes } = this.props;
    const { productIsSelected, quantity, stock } = this.state;
    return (
      <div className="IndividualProduct">
        <span>{title}</span>
        <span>
          <img src={img} alt="Selected Shoe" className="viewer-img" />
        </span>
        <span>£ {price}</span>
        <select
          className="size-selector"
          onChange={e => this.handleSizeChange(e)}
        >
          {sizes.map(size => (
            <option value={size.value}>{size.number}</option>
          ))}
        </select>
        {productIsSelected && stock !== 0 && (
          <div>
            <button value="dec" onClick={e => this.handleQuantity(e)}>
              -
            </button>
            <span>{quantity}</span>
            <button value="inc" onClick={e => this.handleQuantity(e)}>
              +
            </button>
          </div>
        )}
        <button onClick={this.addToBasket}>Add to Basket</button>
      </div>
    );
  }
}

export default ProductComp;
