import './ModalWithForm.css'
const ModalWithForm = ({ children, buttonText ='Add garment', title,  onClose, name }) => {

    console.log("ModalWithForm")
    return (
        <div className={`modal modal_type_${name}`}> 
            <div className="modal__content">
                <button className ="modal__close" type="button" onClick={onClose}>
                 <img src={require("../images/close button image.svg").default} alt="close button" />
                </button> 
                <h3>{title}</h3>
                <form>{children}</form>
                <button type="submit"> {buttonText}</button>
                {/* <button className="modal__button-text" type="submit"> {buttonText}</button> */}
            </div>
        </div>
    )
}

export default ModalWithForm;