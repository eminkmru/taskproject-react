import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedDesc);
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
