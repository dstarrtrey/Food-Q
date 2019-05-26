import React, { useState } from "react";
import styled from 'styled-components';
import MenuItem from '../components/MenuItem';

const StyledMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin: 50px;
`;

function Menu() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 254624432e4498e40922c1a604fe2b423da30458
  const [menu, setMenu] = useState([
    { name: "Whole Piglet", price: 200 },
    { name: "Bird Nest Soup", price: 50 },
    { name: "Peking Duck", price: 30 },
    { name: "Golden Egg Fried Rice", price: 12 },
    { name: "House Egg Noodle", price: 12 },
    { name: "Wonton Noodle Soup", price: 10 }
  ]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  
  const addItem = event => {
    event.preventDefault();
    const { name, price } = event.target;

    //Creates copy of current menu array and adds item to end of it
    setMenu([...menu, {
      name: name.value,
      price: price.value
    }]);
    setName('');
    setPrice(0);
  }


<<<<<<< HEAD
=======
>>>>>>> 84c1b23b3062164c8de70c984aff9d05ba8581f9
=======
>>>>>>> 254624432e4498e40922c1a604fe2b423da30458
  return (
    <div>
      <StyledMenu>
        {menu.map(dish => (
          <MenuItem key={dish.name} name={dish.name} price={dish.price} />
        ))}
      </StyledMenu>
      <form onSubmit={addItem}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <input type="submit" value="Add Item" />
      </form>
    </div>

    
  );
}

export default Menu;
