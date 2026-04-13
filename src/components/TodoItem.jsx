import React from "react";

const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTask(task.id)}>
        {task.text}
      </span>

      <button onClick={() => deleteTask(task.id)}>❌</button>
    </div>
  );
};

export default TodoItem;