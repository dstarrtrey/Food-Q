import React from 'react';
import MenuComponent from '../components/Menu';

function Menu() {
<<<<<<< HEAD
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


=======
>>>>>>> 84c1b23b3062164c8de70c984aff9d05ba8581f9
  return (
    <div>
      <h1>Menu</h1>
      <MenuComponent />
    </div>
  );
}

export default Menu;
