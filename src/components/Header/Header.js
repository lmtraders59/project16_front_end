import "./Header.css";
import logo from "../../images/wtwr.svg";
import avatar from "../../images/Avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { NavLink } from "react-router-dom";
import currentUser from "../EditProfileModal/EditProfileModal";

const WeatherCity = "New York City";
const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

// function Header({
//   openModal,
//   isLoggedIn,
//   handleRegister,
//   handleLogin,
// })

const Header = ({
  onCreateModal,
  openModal,
  isLoggedIn,
  handleRegister,
  handleLogin,
}) => {
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
      <div className="header__container_user">
        <ToggleSwitch />
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
            <div>
              <div
                className="header__add-clothes"
                type="text"
                onClick={onCreateModal}
              >
                + Add New Clothes
              </div>
            </div>
            <NavLink to="/profile">
              <div className="header__name-person">Terrence Tegegne</div>
            </NavLink>
            <div>
              <img src={avatar} alt="avatar" />
            </div>
          </>
        ) : (
          <>
            <button
              className="nav__register-button"
              type="button"
              onClick={handleRegister}
            >
              <div className="header__sign-up">Sign up</div>
            </button>
            <button
              className="nav__login-button"
              type="button"
              onClick={handleLogin}
            >
              <div className="header__log-in">Log in</div>
              
            </button>
          </>
        )}

        {/* <div className="header__avatar-logo">
          <ToggleSwitch />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
