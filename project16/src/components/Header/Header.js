import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = ({ onOpenLogin }) => {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
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
            {/* <button>Sign up</button> */}
          </li>
          {!isLoggedIn ? (
            <li className="header__nav-item">
              <button onClick={onOpenLogin}>Log In</button>
            </li>
          ) : (
            <li><Link to="/login">{currentUser.name}</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// {!isLoggedIn ? (
//   <li className="header__nav-item">
// <button onClick={onOpenLogin}>Log In</button>
// </li>
