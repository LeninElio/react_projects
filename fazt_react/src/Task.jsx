import "./tasks.css";

// en react se pueden agregar estilos de 3 formas:
// 1. Estilos en linea
// 2. Estilos usando clases de css
// 3. Estilos usando css modules

// webpack es un empaquetador de modulos para aplicaciones javascript modernas

export function TaskCard() {
  const cardStyles = {
    background: "#999999",
    color: "#333333",
    padding: "20px",
    borderRadius: "15px",
  };

  return (
    // Estilos en linea
    <div style={cardStyles}>
      {/* dentro de objeto se esta colocando un objeto entonces esto se puede poner en una constante */}
      <h1 style={{ fontWeight: "bold" }}>Mi primera tarea</h1>
      <p>Hola esta es mi primera tarea</p>
    </div>
  );
}

// agregar estilos usando clases de css
export function TaskCardCss({ ready }) {
  return (
    <div className="card">
      <h1>Mi primera tarea</h1>
      {/* una forma de estilizar con concicionales: */}
      {/* <span style={ ready ? {background: "green", color: "#ffffff"} : {background:"red", color: "#ffffff"}}> */}
      {/* Otra manera: */}
      <span className={ ready ? 'bg-green' : 'bg-red'}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
