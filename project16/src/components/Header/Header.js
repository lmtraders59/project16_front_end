import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="/images/cuckoo_clocks.png" alt="logo" />
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/add-blog">Add Blog</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/signup">Sign up</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/login">Log in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
