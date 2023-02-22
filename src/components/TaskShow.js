import { useState } from "react";
import TaskCreate from "./TaskCreate";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskShow({ task }) {
  const { deletTaskById, editTaskByID } = useContext(TasksContext);

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deletTaskById(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedDesc) => {
    setShowEdit(false);
    editTaskByID(id, updatedTitle, updatedDesc);
  };
  return (
    <div className="task-list-item">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-show-text">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-show-text">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="btn-dlt" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="btn-upt" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
