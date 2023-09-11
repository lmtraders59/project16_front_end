const ItemModal = ({ selectedCard, onClose }) => {

 console.log('item modal') 
 return (
    <div className={`modal`}> 
     <div className="modal__content">
       <button className ="modal__close" type="button" onClick={onClose}>
        <img src={require("../images/close_button.svg").default} alt="close button" />
       </button> 
      <img src={selectedCard.link} alt=''/>
      <div className="modal__selected-card">{selectedCard.name}</div>
      <div className="modal__weather-type">Weather Type: {selectedCard.weather}</div>
     </div>
  </div>
 )
}

export default ItemModal;