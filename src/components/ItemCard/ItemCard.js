const ItemCard = ({ item, onSelectCard }) => {
  console.log("item-ItemCard", item);
  return (
    <div className="card">
      <img
        src={item.imageUrl}
        className="card_image"
        onClick={() => onSelectCard(item)}
        alt={item.name}
      />
      <div className="card_name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
