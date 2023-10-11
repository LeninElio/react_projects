import TaskCard from "./TaskCard";
import { useContext } from "react";
import {TaskContext} from '../../context/TaskContext'

function TaskList() {

  const { tasks } = useContext(TaskContext)

  if (!tasks.length) {
    return <h1 className="text-white text-3xl font-bold">No hay tareas que mostrar...</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => {
        return (
          // <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
          <TaskCard key={task.id} task={task} />
        );
      })}
    </div>
  );
}

export default TaskList;
