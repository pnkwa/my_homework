// BakeryItems.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BakeryItems = () => {
  const [bakeryItems, setBakeryItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3040/items')
      .then(response => {
        setBakeryItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching bakery items:', error);
      });
  }, []);

  return (
    <div>
      <h1>Bakery Items</h1>
      <ul>
        {bakeryItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BakeryItems;
