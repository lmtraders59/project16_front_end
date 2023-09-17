import closebutton from "../../images/close_button.svg";
const ItemModal = ({ selectedCard, onClose }) => {
  console.log("item modal");
  return (
    <div className={`modal`}>
      <div className="modal__content modal__content_type_image">
        <button className="modal__close" type="button" onClick={onClose}>
          <img src={closebutton} alt="close button" />
        </button>
        <img src={selectedCard.link} alt={selectedCard.name} />
        <div className="modal__selected-card">{selectedCard.name}</div>
        <div className="modal__weather-type">
          Weather Type: {selectedCard.weather}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
