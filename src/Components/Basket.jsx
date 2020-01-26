import React, { Component } from "react";
import BasketItem from "./BasketItem";

class Basket extends Component {
  constructor() {
    super();
    this.state = {
      itemsInTheBasket: []
    };
  }

  componentDidMount() {
    const productsInBasket = localStorage.getItem("basket");
    const basket = productsInBasket ? JSON.parse(productsInBasket) : [];

    this.setState({ itemsInTheBasket: basket });
  }

  render() {
    const { itemsInTheBasket } = this.state;
    return (
      <div>
        {itemsInTheBasket.map(item => (
          <div>
            <BasketItem {...item} />
          </div>
        ))}
      </div>
    );
  }
}

export default Basket;
