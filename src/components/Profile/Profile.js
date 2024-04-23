import "./Profile.css";
import { SideBar } from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

export function Profile({
  onSelectCard,
  onCreateModal,
  clothingItems,
  handleLogout,
  handleEditClick,
  currentUser,
  isLoggedIn,
  handleLikeClick,
}) {
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
        handleLikeClick={handleLikeClick}
      />
    </div>
  );
};

export default Profile;
