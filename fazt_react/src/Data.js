export function Data() {
  const data = {
    name: "Juan",
    age: 20,
    country: "Colombia",
  };
  return (
    <div>
      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
      <h2>{data.country}</h2>
    </div>
  );

  // return <h1>{JSON.stringify(data)}</h1>
}

// Una manera
// export function UserCard(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <p>$ {props.amount}</p>
//       <p>{props.married ? "Married" : "Single"}</p>
//       <ul>
//         <li>{props.address.city}</li>
//         <li>{props.address.country}</li>
//         <li>{props.address.street}</li>
//       </ul>
//     </div>
//   );
// }

// Forma mas eficiente
export function UserCard({ name, amount, married, address, greet }) {
  console.log(name, amount, married, address, greet);
  return (
    <div>
      <h1>{name}</h1>
      <p>$ {amount}</p>
      <p>{married ? "Married" : "Single"}</p>
      <ul>
        <li>{address.city}</li>
        <li>{address.country}</li>
        <li>{address.street}</li>
      </ul>
      <button onClick={greet}>Greet</button>
    </div>
  );
}

// Forma de exportar por defecto
export default Data;
