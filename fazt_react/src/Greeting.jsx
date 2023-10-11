export function Greeting() {
  const is_married = true;
  // if (is_married) {
  //   return <h1>Hi, I'm married</h1>;
  // } else {
  //   return <h1>Hi, I'm single</h1>;
  // }
  // la misma condicional pero usando operador ternario
  // return is_married ? <h1></h1> : <h1></h1>;
  return <h1>{is_married ? "Hi, I'm married 😭" : "Hi, I'm single👌"}</h1>;
}

// export function GreetingProps(props) {
export function GreetingProps({ title, user = "Anonimo" }) {
  console.log(title, user);
  return <h1>{title}, dice {user}</h1>;
}
