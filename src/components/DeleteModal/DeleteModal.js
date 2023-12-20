import "./DeleteModal.css";
import "../ModalWithForm/ModalWithForm.css";

function DeleteModal({
  isOpen,
  name,
  onClose,
  handleConfirm,
  handleCancel,
  onClick,
}) {
  return (
    <div
      className={
        isOpen ? `modal modal_type_${name}` : `modal_type_${name} modal_hidden`
      }
      onClick={onClick}
    >
      <div className="modal__container modal__container-delete">
        <button
          onClick={onClose}
          type="button"
          className="modal__exit modal__exit-delete"
        ></button>
        <h3 className="modal__title modal__title-delete">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h3>
        <button
          type="button"
          className="modal__confirmation"
          onClick={handleConfirm}
        >
          <div className="modal__confirmation">Yes, delete item</div>
        </button>
        <button type="button" className="modal__cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
