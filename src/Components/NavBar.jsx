import React, {Component} from "react";
import { Link } from "react-router-dom";
import animated from "animate.css";

import "../Styles/NavBar.scss";
import logo from "../img/golden-shoe-logo.png";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  
  render() {
    return(
  <div className="NavBar">
    <ul className="NavBar">
      <div className="dropdown-menu">
        <button className="dropdown-btn">
          <ion-icon name="ios-menu" />
        </button>
        <div className='dropdown-content animated fadeInLeft'>
          <Link to="/for-women" className="item">
            Women
          </Link>
          <Link to="/for-men" className="item">
            Men
          </Link>
          <Link to="/faq" className="item">
            FAQs
          </Link>
          <button className='close-btn' onClick={this.closeDropdown}><ion-icon name='close'/></button>
        </div>
      </div>
      <Link to="/">
        <img src={logo} alt="Golden Shoe Logo" className="company-logo" />
      </Link>
      <div className="extra-buttons">
        <ion-icon name="ios-basket" />
        <ion-icon name="person" />
      </div>
    </ul>
  </div>
  )}
};

export default NavBar;
