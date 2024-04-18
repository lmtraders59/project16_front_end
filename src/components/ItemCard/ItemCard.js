
// const isLiked = clothing.likes.some((user) => user === currentUser._id);

// const itemLikeButtonClassName = `card__like-button ${
//   isLiked ? "card__like-button_liked" : "card__like-button"
// } `;

const ItemCard = ({ item, onSelectCard, handleLikeClick, currentUser }) => {
  return (
    <div className="card">
      <img
        src={item.imageUrl}
        className="card_image"
        onClick={() => onSelectCard(item)}
        alt={item.name}
      />
      <h3 className="card_name">{item.name}</h3>
    </div>
  );
};

export default ItemCard;
