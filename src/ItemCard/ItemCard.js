const ItemCard = ({ item }) => {
    return <> 
     <div>
        <img src={item.link} className='card_image' alt="x" />
        <div className='card_name'>{item.name}</div>
     </div>
    </>;
  };

export default ItemCard;