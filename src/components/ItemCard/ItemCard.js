


const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card">
      <img
        src={item.imageUrl}
        className="card_image"
        onClick={() => onSelectCard(item)}
        alt={item.name}
      />
      <h3 className="card_name">{item.name}</h3>
    </div>
  );
};

export default ItemCard;
