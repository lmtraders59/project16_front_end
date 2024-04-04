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

      {/* Implement {isLoggedIn ?  in here */}
       {/* {isLoggedIn ? ( <button
              type="button"
              className="header__button"
              onClick={openModal}
            >
              + Add clothes
            </button>                                                                                                  // link to /profile                                                                                    // avatar                                                                                                        ) : (                                                                                                           // button to handleRegister                                                               signup                                                                                                       // button to handle login                                                                     login                                                                                                           )
 */}
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

// const Header = ({ isAuthenticated }) => {
//     return (
//         <header className="header">
//             <div className="logo">Your Logo</div>
//             <nav>
//                 <Link to="/">Home</Link>
//                 <Link to="/about">About</Link>
//                 {isAuthenticated ? (
//                     <Link to="/profile">Profile</Link>
//                 ) : (
//                     <>
//                         <Link to="/signup">Sign Up</Link>
//                         <Link to="/login">Login</Link>
//                     </>
//                 )}
//             </nav>
//         </header>
//     );
// };

export default Header;
