import { IoBarcode, IoBowlingBallSharp } from "react-icons/io5";

export const Post = () => {
  return (
    <button
      onClick={() => {
        // alert("Obteniendo datos ...");
        // aqui vamos a usar las apis del navegador
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }}
    >
      <IoBarcode />
      Traer datos
      <IoBowlingBallSharp/>
    </button>
  );
};
