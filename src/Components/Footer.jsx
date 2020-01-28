import React from "react";

import "../Styles/Footer.scss";

const Footer = () => (
  <div className="Footer">
    <div className="copyright">&#9400; 2020 Golden Shoe</div>
    <div className="social-media-links">
      <a href="http://facebook.com">
        <ion-icon name="logo-facebook" />
      </a>
      <a href="http://twitter.com">
        <ion-icon name="logo-twitter" />
      </a>
      <a href="http://instagram.com">
        <ion-icon name="logo-instagram" />
      </a>
    </div>
  </div>
);

export default Footer;
