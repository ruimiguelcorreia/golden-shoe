import React, { Component } from "react";

class SubscriptionForm extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
  }

  handleFieldChang = event => {
    this.setState({
      email: event.target.value
    });
  };

  render() {
    const { email } = this.state;

    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleFieldChange}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SubscriptionForm;
