import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = props => {
  return (
    <header className="menu">
      <div className="menu__logo">
        <Link to="/" className="menu__logo-link">
          <img src="/img/Logo.png" alt="logo"/>
        </Link>
      </div>
      <div className="menu__nav">
        <Link to="/about" className="menu__nav-link">
          About
        </Link>
        <Link to="/contacts" className="menu__nav-link">
          Contacts
        </Link>
      </div>
    </header>
  );
};

export default Header;
