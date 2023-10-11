import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks.js";

// Creamos el contexto
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTasks(taskTitle, taskDescription) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: taskTitle,
        description: taskDescription,
      },
    ]);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    // Esta funcion retorna un elemento que englobe a los componentes que van a consumir el contexto.

    <TaskContext.Provider
      value={{
        tasks,
        createTasks,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
