import "../Profile/Profile.css";
import avatar from "../../images/Avatar.svg";

export function SideBar({ handleLogout }) {
  return (
    <div className="profile__sidebar">
      {/* <div className="profile__name-avatar"> */}
        <img className="profile__avatar-logo" src={avatar} alt="avatar" />
        <div className="profile__name-person" type="text">
          Terrence Tegegne
        </div>
      {/* </div> */}
      {/* <div className="sidebar__profile-data"
        Change profile data
      </div> */}
      <div className="sidebar__logout" onClick={handleLogout}>
        Log out
      </div>
    </div>
  );
}
