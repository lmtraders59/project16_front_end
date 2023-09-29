import "./ModalWithForm.css";
import closebutton from "../../images/close_button.svg";
const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
  isOpen,
  onSubmit,

}) => {
  console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button className="modal__close" type="button" onClick={onClose}>
          <img src={closebutton} alt="close button" />
        </button>
        <h3>{title}</h3>
        <form onSubmit={onSubmit}>
          {children}
          <button type="submit"> {buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
