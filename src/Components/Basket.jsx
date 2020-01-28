import React, { Component } from "react";
import BasketItem from "./BasketItem";

import "../Styles/Basket.scss";

class Basket extends Component {
  constructor() {
    super();
    this.state = {
      itemsInTheBasket: [],
      total: undefined,
      discount: "",
      newTotal: undefined,
      discountValue: undefined,
      shouldRender: false,
      isListClear: true
    };
  }

  handleFieldChange = event => {
    this.setState({
      discount: event.target.value
    });
  };

  applyDiscount = event => {
    event.preventDefault();
    if (this.state.discount === "VOUCHER10") {
      this.setState({
        newTotal: (this.state.total - 10).toFixed(2),
        discountValue: (10).toFixed(2),
        shouldRender: true
      });
    }
  };

  clearBasket = event => {
    localStorage.clear();
    alert("Shopping Cart is now clear!");
  };

  componentDidMount() {
    const productsInBasket = localStorage.getItem("basket");
    const basket = productsInBasket ? JSON.parse(productsInBasket) : [];

    let total;
    if (basket.length !== 0) {
      const prices = basket.map(item => item.quantity * item.price);
      total = prices.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    } else {
      total = 0;
    }

    this.setState({
      itemsInTheBasket: basket,
      total: total,
      isListClear: false
    });
  }

  render() {
    const {
      itemsInTheBasket,
      total,
      discount,
      newTotal,
      shouldRender,
      discountValue
    } = this.state;
    return (
      <div className="Basket">
        <div className="display-area">
          <button className="clear-basket" onClick={this.clearBasket}>
            Clear
          </button>
          <div className="items-added">
            <span className="shopping-cart">Shopping Cart:</span>
            {itemsInTheBasket.map(item => (
              <div>
                <BasketItem key={item.id} {...item} />
              </div>
            ))}
          </div>
          <div className="calculation">
            <form className="discount-form">
              <input
                type="text"
                placeholder="eg. DXASRFA10"
                value={discount}
                onChange={this.handleFieldChange}
              ></input>
              <button onClick={this.applyDiscount}>Apply</button>
            </form>
            <div className="bottom-calc">
              <span className="total">Total: {total} £</span>
              {shouldRender && <span>Discount Applied: {discountValue} £</span>}
              {shouldRender && <span>Final Amount: {newTotal} £</span>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Basket;
