const ItemModal = ({ selectedCard }) => {

 console.log('item modal') 
 return (
    <div className={`modal`}> 
    <div className="modal__content">
      <img src={selectedCard.link} alt=''/>
      <div>Text for the Item name</div>
      <div>Weather Type</div>
    </div>
  </div>
 )
}

export default ItemModal;