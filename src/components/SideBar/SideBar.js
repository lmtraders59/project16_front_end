import "../Profile/Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

export function SideBar({ handleLogout, handleEditClick }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="profile__sidebar">
      <div className="profile__name_avatar-section">
        <img
          className="profile__avatar-logo"
          src={currentUser.avatar}
          alt="avatar"
        />
        <div className="profile__name-person" type="text">
          {currentUser.name}
        </div>
      </div>
      <p className="sidebar__profile-data" onClick={handleEditClick}>
        Change profile data
      </p>
      <p className="sidebar__logout" onClick={handleLogout}>
        Log out
      </p>
    </div>
  );
}
