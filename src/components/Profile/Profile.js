import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import avatar from "../../images/Avatar.svg";
import './Profile.css'

const Profile = ({onSelectCard}) => {
  return (
    <div className="profile">
      <div>
        <img src={avatar} alt="avatar" />
        <div className="profile__name-person">Terrence Tegegne</div>
      </div>
      <div>
        Your items
        <div className="profile__add-clothes" type="text">
          + Add New
          <div className="card_section">
            {defaultClothingItems.map((item) => (
              <ItemCard item={item} onSelectCard={onSelectCard}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
