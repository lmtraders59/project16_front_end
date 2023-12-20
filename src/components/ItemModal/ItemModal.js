import "./ItemModal.css";
import closeButton from "../../images/close_button.svg";

const ItemModal = ({ selectedCard, onClose, handleDeleteModal }) => {
  console.log("selectedCard-ItemModal", selectedCard);
  return (
    <div className={`item__modal`}>
      <div className="item__content item__content_type_image">
        <button className="item__close" type="button" onClick={onClose}>
          <img src={closeButton} alt="close button" />
        </button>
        <div className="item__container">
          <img
            className="item__image"
            src={selectedCard.imageUrl}
            alt={selectedCard.name}
          />
        </div>
        <div className="item__selected-card">{selectedCard.name}</div>
        <div className="item__weather-type">
          Weather: {selectedCard.weather}
        </div>
        <button type="button" onClick={handleDeleteModal}>
          <div className="item__modal-delete">Delete Item</div>
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
