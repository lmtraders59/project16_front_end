import "../Profile/Profile.css";
import avatar from "../../images/Avatar.svg";

export function SideBar({ currentUser, handleLogout,  handleEditClick }) {
  return (
    <div className="profile__sidebar">
      <div className="profile__name_avatar-section">
        <img className="profile__avatar-logo" src={avatar} alt="avatar" />
        <div className="profile__name-person" type="text">
          Terrence Tegegne
        </div>
      </div>
      {/* <div className="sidebar__profile-data"
        Change profile data
      </div> */}
      <p className="sidebar__profile-data"  onClick={handleEditClick}>Change profile data</p>
      <p className="sidebar__logout" onClick={handleLogout}>
        Log out
      </p>
    </div>
  );
}
