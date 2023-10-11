import TaskList from "./components/Tasks/TaskList";
import TaskForm from "./components/Tasks/TaskForm";

function App() {
  // lo que estaba aqui se va como contexto

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
