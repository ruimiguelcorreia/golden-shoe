import React from "react";
import {Link} from 'react-router-dom';

import SubscriptionForm from "../Components/SubscriptionForm";

import "../Styles/Homepage.scss";

const Homepage = () => (
  <div className="Homepage">
    <SubscriptionForm />
    <h1 className='company-name'>Golden Shoe</h1>
    <div className='homepage-links'>
    <Link to='/for-women' className='homepage-btn'>for Her</Link>
    <Link to='/for-men' className='homepage-btn'>for Him</Link>
    </div>
  </div>
);

export default Homepage;
