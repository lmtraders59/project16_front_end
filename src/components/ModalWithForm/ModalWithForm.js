import "./ModalWithForm.css";
import closeButton from "../../images/close_button.svg";
const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
  onSubmit,
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
        </form>
      </div>
    </div>
  );
};

// =====================================
// function ModalWithForm({
//   isOpen,
//   name,
//   title,
//   onClose,
//   onSubmit,
//   children,
//   buttonText,
// }) {
//   return (
//     <div
//       className={
//         isOpen ? `modal modal_type_${name}` : `modal_type_${name} modal_hidden`
//       }
//     >
//       <div className="modal__form-container">
//         <button
//           className="modal__exit"
//           onClick={onClose}
//           type="button"
//         ></button>
//         <h3 className="modal__form-title">{title}</h3>
//         <form className="form" name={name} onSubmit={onSubmit}>
//           {children}
//           <button className="form__submit" type="submit">
//             {buttonText}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// =================================

export default ModalWithForm;
