import "./ModalWithForm.css";
import closeButton from "../../images/close_button.svg";
const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
  onSubmit,
  hasAlternativeButton,
  alternativeButtonClick,
  alternativeButtonText,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button className="modal__close" type="button" onClick={onClose}>
          <img src={closeButton} alt="close button" />
        </button>
        <h3 className="modal__form-title">{title}</h3>
        <form onSubmit={onSubmit}>
          {children}
          <button className="modal__submit" type="submit">
            {" "}
            {buttonText}
          </button>
          {hasAlternativeButton && (
            <button
              type="button"
              className="form__alternative-button"
              onClick={alternativeButtonClick}
            >
              {alternativeButtonText}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
