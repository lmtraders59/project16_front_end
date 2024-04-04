import "./Header.css";
import logo from "../../images/wtwr.svg";
import avatar from "../../images/Avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const WeatherCity = "New York City";
const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({
  openModal,
  isLoggedIn,
  handleRegister,
  handleLogin,
})

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <div className="header__currentDate">
            {currentDate}, {WeatherCity}
          </div>
        </div>
      </div>
      {isLoggedIn ? (
        <>
          <button type="button" className="header__button" onClick={openModal}>
            + Add clothes
          </button>
          <NavLink to="/profile" activeClassName="menu__item-active">
            <p className="header__user">{currentUser.name}</p>
          </NavLink>
          <img
            className="header__avatar"
            src={currentUser.avatar}
            alt="User avatar"
          />
        </>
      ) : (
        <>
          <button
            className="nav__register-button"
            type="button"
            onClick={handleRegister}
          >
            Sign up
          </button>
          <button
            className="nav__login-button"
            type="button"
            onClick={handleLogin}
          >
            Log in
          </button>
        </>
      )}

      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <div
            className="header__add-clothes"
            type="text"
            onClick={onCreateModal}
          >
            + Add New Clothes
          </div>
        </div>
        <Link to="/profile">
          <div className="header__name-person">Terrence Tegegne</div>
        </Link>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
