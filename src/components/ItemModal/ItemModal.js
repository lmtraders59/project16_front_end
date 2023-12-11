import closeButton from "../../images/close_button.svg";
const ItemModal = ({ selectedCard, onClose }) => {
  console.log("selectedCard-ItemModal", selectedCard);
  return (
    <div className={`modal`}>
      <div className="modal__content modal__content_type_image">
        <button className="modal__close" type="button" onClick={onClose}>
          <img src={closeButton} alt="close button" />
        </button>
        <img src={selectedCard.imageUrl} alt={selectedCard.name} />
        <div className="modal__selected-card">{selectedCard.name}</div>
        <div className="modal__weather-type">
          Weather: {selectedCard.weather}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
