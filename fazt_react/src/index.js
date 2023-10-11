import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Operations } from "./Operations";
import { Data, UserCard } from "./Data";
import Product, { Navbar } from "./Product";
import { Greeting, GreetingProps } from "./Greeting";
import { Botton } from "./Botton";
import { TaskCard, TaskCardCss } from "./Task";
import { Saludar } from "./Saludar";
import { Post } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));
const handleChange = (e) => {
  console.log(e.target.value);
};

const users = [
  { id: 1, name: "Ryan", age: 20, image: "https://robohash.org/user1" },
  { id: 2, name: "Juan", age: 30, image: "https://robohash.org/user2" },
  { id: 3, name: "Pepe", age: 40, image: "https://robohash.org/user3" },
  { id: 4, name: "Luis", age: 50, image: "https://robohash.org/user4" },
  { id: 5, name: "Maria", age: 60, image: "https://robohash.org/user5" },
];

const Counter = () => {
  // 0 es la inicializacion de count
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const subtractCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h3>Counter</h3>
      <p>{count}</p>
      <button onClick={addCount}>Sumar</button>
      <button onClick={subtractCount}>Restar</button>
    </div>
  );
};

const Message = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("render");
  }, []);
  // Al finas se agrega [] para que solo se ejecute una vez.
  // si agregamos una valor a [], ejemplo [contador] se ejecutara cada vez que cambie ese valor.

  return (
    <div>
      <input
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        onClick={() => {
          alert("El mensaje es: " + message);
        }}
      >
        Guardar
      </button>
    </div>
  );
};

root.render(
  <>
    <Greeting />
    <GreetingProps />
    {/* # Enviando parametros */}
    <GreetingProps title="Hola" user="Juan" />
    <GreetingProps title="bye" user="Pepe" />
    <GreetingProps title={30} />
    <GreetingProps title={[1, 2, 3]} />
    <Data />

    <UserCard
      name="Ryan"
      amount={2000}
      married={true}
      point={[99, 33.3, 22]}
      address={{ street: "123 Main Street", city: "New York", country: "EEUU" }}
      greet={function () {
        alert("Hello");
      }}
    />

    <UserCard
      name="Juan"
      amount={3000}
      married={false}
      point={[99, 33.3, 22]}
      address={{
        street: "123 Wall Street",
        city: "California",
        country: "EEUU",
      }}
    />

    <Product />
    <Navbar />
    <Operations />
    <Botton text="Clic me" />
    <Botton text="Pay" />
    <Botton text="Go to" name="Pepe" />
    <hr />
    <TaskCard />
    <br />
    <TaskCardCss />
    <TaskCardCss ready={true} />
    {/* Componentes con clases */}
    <Saludar />
    <Botton text="Clic mex" />
    <input type="text" onChange={handleChange} />
    <Post />
    {/* Listas */}
    {users.map((user, i) => (
      <div key={i}>
        <h2>{user.name}</h2>
        <img src={user.image} alt={user.name} />
      </div>
    ))}
    <hr />
    <Counter />
    <Message />
  </>
);
