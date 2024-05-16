// AddItemForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddItemForm = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { name: itemName, price: parseFloat(itemPrice) };

    axios.post('http://localhost:3040/items', newItem)
      .then(response => {
        console.log('Item added successfully:', response.data);
        // Reset form fields
        setItemName('');
        setItemPrice('');
      })
      .catch(error => {
        console.error('Error adding item:', error);
      });
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={itemName}
            onChange={e => setItemName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            value={itemPrice}
            onChange={e => setItemPrice(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItemForm;
