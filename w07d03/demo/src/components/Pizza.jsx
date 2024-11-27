import { useState } from "react";

const Pizza = () => {
  const [newTopping, setNewTopping] = useState('');
  // const [toppings, setToppings] = useState([]);
  // const [crustType, setCrustType] = useState('stuffed');

  const [pizza, setPizza] = useState({
    toppings: [],
    crustType: 'thin',
    size: 'L',
    glutenFree: false,
    sauce: 'tomato',
  });

  // $.post('/pizza', pizza);

  const addTopping = () => {
    const copy = {
      ...pizza,
      toppings: [
        newTopping,
        ...pizza.toppings,
      ]
    };

    setPizza(copy);

    // const copy = [ newTopping, ...toppings ];
    // setToppings(copy);

    // setToppings([ newTopping, ...toppings ]);
  };

  const mappedToppings = pizza.toppings.map((topping, index) => {
    return <p key={index}>{topping}</p>;
  });

  // (event) => { setCrustType(event.target.value) }
  const updateCrust = (event) => {
    const copy = {
      ...pizza,
      crustType: event.target.value,
    };

    setPizza(copy);
  }

  return (
    <div>
      <h2>Create your own Pizza!</h2>

      <div>
        <h2>Crust: {pizza.crustType}</h2>
        <input 
          value={pizza.crustType}
          onChange={updateCrust}
        />
      </div>


      <div>
        <label>New topping:</label>
        {/* bound or controlled input */}
        <input
          value={newTopping}
          onChange={(event) => { setNewTopping(event.target.value) }}
        />
        <button onClick={addTopping}>Add</button>
      </div>

      <h2>Toppings</h2>
      { mappedToppings }
    </div>
  );
};

export default Pizza;
