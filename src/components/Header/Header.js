import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import cuckoo_clocks from "../../images/cuckoo_clocks.png";
import MobileMenu from "../MobileMenu/MobileMenu";
import "../MobileMenu/MobileMenu.css";

const Header = ({ onOpenLogin }) => {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={cuckoo_clocks} alt="logo" />
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="header__nav-item">
            <Link to="/add-blog">Add Blog</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/about">About</Link>
          </li> */}
          <li className="header__nav-item">
            <Link to="/profile">Profile</Link>
          </li>
          {/* <li className="header__nav-item">
            <Link to="/signup">Sign up</Link>
          </li> */}
          {!isLoggedIn ? (
            <li className="header__nav-item">
              <button onClick={onOpenLogin}>Log In</button>
            </li>
          ) : (
            <li className="header__username">{currentUser.name}</li>
          )}
        </ul>
        <button onClick={toggleMenu} className="header__menu-icon">
          Menu
        </button>
      </nav>
      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};

export default Header;
