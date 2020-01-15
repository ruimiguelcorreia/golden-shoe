import React, { Component } from "react";

import '../Styles/SubscriptionForm.scss';

class SubscriptionForm extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  render() {
    const { email } = this.state;

    return (
      <div className='SubscriptionBox'>
        <p>Subscribe to our newsletter and get a £10 OFF to be used in any store (online included).</p>
        <form className='subscription-form'>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleFieldChange}
          />
          <button><ion-icon name="ios-send"/></button>
        </form>
      </div>
    );
  }
}

export default SubscriptionForm;
