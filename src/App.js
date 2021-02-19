import React from "react";

const foods = [
  {
    id: 1,
    name: "kimchi",
    stock: {
      left: false,
      stocks: 0,
    },
  },
  {
    id: 2,
    name: "bibim-bap",
    stock: {
      left: true,
      stocks: 3,
    },
  },
];

function Food({ name, stock }) {
  return (
    <div className="food">
      <h3 className="food__name">{name}</h3>
      {stock.left ? (
        <h5 className="food__stock">{stock.stocks} Left</h5>
      ) : (
        <h5 className="food__stock">Sold Out</h5>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>This is Foods!</h1>
      {foods.map((food) => (
        <Food key={food.id} name={food.name} stock={food.stock} />
      ))}
    </div>
  );
}

export default App;
