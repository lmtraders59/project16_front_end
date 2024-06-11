import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
// import logo from "../images/cuckoo_clocks.png";
import "../Header/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="/images/cuckoo_clocks.png" alt="logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
