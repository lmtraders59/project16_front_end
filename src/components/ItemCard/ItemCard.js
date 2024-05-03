import "../ItemCard/ItemCard.css";
import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, handleLikeClick, isLoggedIn }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const isLiked = item.likes.some((user) => user === currentUser._id);
  const itemLikeButtonClass = `card__like-button ${
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
      <div className="card_content">
        <h3 className="card_name">{item.name}</h3>
        {isLoggedIn ? (
          <button
            type="button"
            className={itemLikeButtonClass}
            onClick={() => {
              handleLikeClick(item._id, isLiked);
            }}
          ></button>
        ) : (
          <button type="button" className="card__like-button_hidden"></button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
