import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTasks } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      document.getElementById("alert-div").classList.add("flex");
      document.getElementById("alert-div").classList.remove("hidden");
    } else {
      createTasks(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="min-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-zinc-900 p-10 mb-4">

        <div
          id="alert-div"
          className="justify-between text-orange-200 shadow-inner rounded p-3 bg-orange-600 hidden"
        >
          <p className="self-center">
            <strong>Debe</strong> rellenar los dos campos...
          </p>
          <strong
            className="text-xl align-center cursor-pointer alert-del"
            onClick={() => {
              document.getElementById("alert-div").classList.add("hidden");
            }}
          >
            &times;
          </strong>
        </div>

        <input
          type="text"
          placeholder="Nombre de la tarea..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 border-slate-500 rounded mb-4 w-full mt-3"
          autoFocus
        />
        <textarea
          type="text"
          placeholder="Descripcion de la tarea..."
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 border-slate-500 rounded mb-4 w-full"
          value={description}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
