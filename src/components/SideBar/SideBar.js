import "../Profile/Profile.css";
import avatar from "../../images/Avatar.svg";

export function SideBar({ }) {
  return (
    <div className="profile__sidebar">
      <img class="profile__avatar-logo" src={avatar} alt="avatar" />
      <div className="profile__name-person" type="text">
        Terrence Tegegne
      </div>
    </div>
  );
}
