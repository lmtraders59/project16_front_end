const ItemCard = ({ item, onSelectCard }) => {
    return <> 
     <div>
        <img src={item.link} className='card_image' onClick={() => onSelectCard(item)} alt="CardImage" />
        <div className='card_name'>{item.name}</div>
     </div>
    </>;
  };

export default ItemCard;