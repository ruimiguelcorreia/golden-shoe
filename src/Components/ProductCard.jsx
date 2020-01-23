import React from "react";
import Popup from 'reactjs-popup';

import "../Styles/ProductCard.scss";

const ProductCard = props => (
  <div className="ProductCard">
    <span className="product-image">
    <Popup className='popUp' trigger={<button className='more-button'><ion-icon name='ios-more'/></button>} position='bottom center'>
      <div>Testing</div>
    </Popup>
      <img src={props.img} alt="Selected Product" />
    </span>
    <span className="product-name">
      <p>{props.title}</p>
    </span>
    <span className="product-price">
      <p>£ {props.price}</p>
    </span>
  </div>
);

export default ProductCard;
