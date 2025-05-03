
import { useState, useCallback } from "react";
import { Item } from "../../models/Item";
import "./styles.css";

export default function CrudApp() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const resetForm = () => {
    setSelectedItem(null);
    setName("");
    setDescription("");
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const newOrUpdatedItem = new Item(
      selectedItem ? selectedItem.id : Date.now(),
      name,
      description
    );

    setItems((prevItems) =>
      selectedItem
        ? prevItems.map((item) => (item.id === selectedItem.id ? newOrUpdatedItem : item))
        : [...prevItems, newOrUpdatedItem]
    );

    resetForm();
  }, [selectedItem, name, description]);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setName(item.name);
    setDescription(item.description);
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    if (selectedItem?.id === id) resetForm();
  };

  return (
    <div className="crud-container">
      <h2>CRUD with OOP (Item Model)</h2>

      <form onSubmit={handleSubmit} className="crud-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {selectedItem ? "Update" : "Create"}
          </button>
          {selectedItem && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={resetForm}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <ul className="items-list">
        {items.map((item) => (
          <li key={item.id} className="item-card">
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>
                <em>{item.getInfo()}</em>
              </p>
            </div>
            <div className="item-actions">
              <button onClick={() => handleEdit(item)} className="btn btn-warning">
                Edit
              </button>
              <button onClick={() => handleDelete(item.id)} className="btn btn-danger">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
