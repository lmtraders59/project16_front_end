import "./Profile.css";
import { SideBar } from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  onSelectCard,
  onCreateModal,
  clothingItems,
  handleLogout,
}) => {
  return (
    <div className="profile">
      <SideBar handleLogout={handleLogout} />
      <ClothesSection
        clothingItems={clothingItems}
        onCreateModal={onCreateModal}
        onSelectCard={onSelectCard}
      />
    </div>
  );
};

export default Profile;