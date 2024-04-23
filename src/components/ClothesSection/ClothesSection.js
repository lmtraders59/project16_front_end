import "../Profile/Profile.css";
import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({
  onSelectCard,
  onCreateModal,
  clothingItems,
  currentUser,
  isLoggedIn,
}) => {
  return (
    <div className="profile__items">
      <div className="profile__add-clothes" type="text">
        <div className="profile__add-new">
          <p>Your items</p>
          <div className="profile__new-clothes">
            <button className="profile__add-button" onClick={onCreateModal}>
              + Add New
            </button>
          </div>
        </div>
        <div className="profile__clothes-section">
          {clothingItems.map((item) => (
            <ItemCard
              isOpen="false"
              clothing={item}
              key={item._id}
              weather={item.weather}
              item={item}
              onSelectCard={onSelectCard}
              currentUser={currentUser}
              isLoggedIn={isLoggedIn}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClothesSection;
