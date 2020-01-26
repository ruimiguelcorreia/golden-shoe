import React from "react";

import "../Styles/Footer.scss";

const Footer = () => (
  <div className="Footer">
    <div className="copyright">&#9400; 2020 Golden Shoe</div>
    <div className="social-media-links">
      <a href="#">
        <ion-icon name="logo-facebook" />
      </a>
      <a href="#">
        <ion-icon name="logo-twitter" />
      </a>
      <a href="#">
        <ion-icon name="logo-instagram" />
      </a>
    </div>
  </div>
);

export default Footer;
