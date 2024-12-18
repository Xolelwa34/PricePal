import { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const addItem = () => {
    setItems([...items, itemName]);
    setItemName("");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl">Shopping List</h1>
      <input
        type="text"
        placeholder="Add an item..."
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        className="border p-2"
      />
      <button onClick={addItem} className="bg-green-500 text-white p-2">
        Add
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;

