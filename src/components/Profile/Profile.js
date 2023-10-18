import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import avatar from "../../images/Avatar.svg";
import "./Profile.css";

const Profile = ({ onSelectCard, onCreateModal }) => {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <img src={avatar} alt="avatar" />
        <div className="profile__name-person" type="text">
          Terrence Tegegne
        </div>
      </div>
      <div className="profile__items">
        <div className="profile__add-clothes" type="text">
          <div className="profile__add-new">
            <p>Your items</p>
            <div className="profile__new-clothes">
              <button className="profile__add-button" onClick={onCreateModal}>
                + Add New
              </button>
              {/*  card add should be added / add card delete */}
            </div>
          </div>
          <div className="profile__clothes-section">
            {defaultClothingItems.map((item) => (
              <ItemCard item={item} onSelectCard={onSelectCard} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
