import "./Profile.css";
import { SideBar } from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  onSelectCard,
  onCreateModal,
  clothingItems,
  handleLogout,
  handleEditClick,
  currentUser,
  isLoggedIn,
}) => {
  return (
    <div className="profile">
      <SideBar
        handleLogout={handleLogout}
        currentUser={currentUser}
        handleEditClick={handleEditClick}
      />
      <ClothesSection
        clothingItems={clothingItems}
        onCreateModal={onCreateModal}
        onSelectCard={onSelectCard}
        currentUser={currentUser}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};

export default Profile;
