import "./list.css";

function ItemList({ items }) {
  return (
    <ul className="ul">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ItemList;
