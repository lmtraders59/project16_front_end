import "./ItemModal.css";
import closeButton from "../../images/close_button.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemModal = ({ onClose, handleDeleteModal, item }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = item.owner === currentUser._id;
  const deleteClass = `item__modal-delete ${
    isOwn ? "item__modal-delete_visible" : "item__modal-delete_hidden"
  }`;
  return (
    <div className={`modal item__modal`}>
      <div className="item__content item__content_type_image">
        <button className="item__close" type="button" onClick={onClose}>
          <img src={closeButton} alt="close button" />
        </button>
        <div className="item item__container">
          <img className="item__image" src={item.imageUrl} alt={item.name} />
        </div>
        <h3 className="item__selected-card">{item.name}</h3>
        <div className="item__weather-type">Weather: {item.weather}</div>
        <button
          className={deleteClass}
          type="button"
          onClick={handleDeleteModal}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
