import "./Header.css";
import logo from "../../images/wtwr.svg";
import avatar from "../../images/Avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom";

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
