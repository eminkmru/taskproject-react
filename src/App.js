import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);

  const deletTaskById = (id) => {
    debugger;
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };
  const editTaskByID = (id, updatedTitle, updatedDesc) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedDesc };
      }
      return task;
    });
    setTasks(updatedTask);
  };

  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];

    setTasks(createdTasks);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deletTaskById}
        onUpdate={editTaskByID}
      />
    </div>
  );
}

export default App;
