import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({ task, taskformUpdate, onUpdate }) {
  const { createTask, editTaskByID } = useContext(TasksContext);

  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTaskChange = (e) => {
    setTaskDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      createTask(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };
  return (
    <div>
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form className="task-form" onSubmit={handleSubmit}>
            <label className="task-label">Başlığı Düzenleyiniz!</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
              type="text"
            />
            <label className="task-label">Taskı Düzenleyiniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button update-button">Düzenle</button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="task-form" onSubmit={handleSubmit}>
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
              type="text"
            />
            <label className="task-label">Task Giriniz!</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button">Oluştur</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
