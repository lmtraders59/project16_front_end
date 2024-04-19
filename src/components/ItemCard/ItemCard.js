import "../ItemCard/ItemCard.css";

const ItemCard = ({
  item,
  onSelectCard,
  handleLikeClick,
  currentUser,
  isLoggedIn,
}) => {
  const isLiked = item.likes.some((user) => user === currentUser._id);

  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_liked" : "card__like-button"
  } `;
  return (
    <div className="card">
      <img
        src={item.imageUrl}
        className="card_image"
        onClick={() => onSelectCard(item)}
        alt={item.name}
      />
      <h3 className="card_name">{item.name}</h3>
      {isLoggedIn ? (
        <button
          type="button"
          className={itemLikeButtonClassName}
          onClick={() => {
            handleLikeClick(item._id, !isLiked);
          }}
        ></button>
      ) : (
        <button type="button" className="card__like-button_hidden"></button>
      )}
    </div>
  );
};

export default ItemCard;
