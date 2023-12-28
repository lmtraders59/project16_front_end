import "./Profile.css";
import { SideBar } from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
 

const Profile = ({ onSelectCard, onCreateModal, clothingItems }) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection 
      clothingItems={clothingItems}
      onClick={onCreateModal}
      onSelectCard={onSelectCard}
      /> 
      <div className="profile__items">
      </div>
    </div>
  );
};

export default Profile;
