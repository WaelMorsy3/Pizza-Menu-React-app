import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1> Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizaas = pizzas.length;
  return (
    <main className="menu">
      <h2> Our Menu </h2>

      {numPizaas > 0 ? (
        //fragment to have more than one element inside jsx
        <React.Fragment>
          <p>
            Ordering delicious pizzas anytime, anywhere! Whether you're craving
            a classic Margherita, a spicy Pepperoni, or a custom creation loaded
            with your favorite toppings and our app makes it easy to satisfy
            your pizza cravings.
          </p>
          <ul className="pizzas">
            {/* render a list with map method (loop) creating a new array */}
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We 're still working on our menu. Please come later :</p>
      )}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""} `}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span> {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 3} </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open_hour = 8;
  const close_hour = 22;
  const is_open = hour >= open_hour && hour <= close_hour;

  return (
    <footer className="footer">
      {is_open ? (
        <Order close_hour={close_hour} open_hour={open_hour} />
      ) : (
        <p>
          We're happy to welcome you between {open_hour}:00 and {close_hour}:00{" "}
        </p>
      )}
      ;
    </footer>
  );
}

function Order({ close_hour, open_hour }) {
  return (
    <div className="order">
      <p>
        We're open from {open_hour}:00 untill {close_hour}:00. Come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// first step
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
