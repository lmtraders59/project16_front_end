// import { useContext } from "react";

import "./main.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom";

// import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { NavLink } from "react-router-dom";

const WeatherCity = "New York City";
const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const main = ({ onCreateModal, isLoggedIn, handleRegister, handleLogin }) => {
  // const { currentUser } = useContext(CurrentUserContext);
  return (
    <main className="main">
      <div className="main__logo">
        {/* <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div> */}
        <div>
          <div className="main__currentDate">
            {currentDate}, {WeatherCity}
          </div>
        </div>
      </div>
      <div className="main__container_user">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <div
              className="main__add-clothes"
              type="text"
              onClick={onCreateModal}
            >
              + Add New Clothes
            </div>
            <NavLink to="/profile">
              <p className="main__name-person">{currentUser.name}</p>
            </NavLink>
            <div>
              <img
                className="main__avatar-logo"
                src={currentUser.avatar}
                alt="User avatar"
              />
            </div>
          </>
        ) : (
          <>
            <button
              className="nav__register-button"
              type="button"
              onClick={handleRegister}
            >
              <div className="main__sign-up">Sign up</div>
            </button>
            <button
              className="nav__login-button"
              type="button"
              onClick={handleLogin}
            >
              <div className="main__log-in">Log in</div>
            </button>
          </>
        )}
      </div>
    </main>
  );
};

export default main;
