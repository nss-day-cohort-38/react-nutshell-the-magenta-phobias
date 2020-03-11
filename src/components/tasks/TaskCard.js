import React from "react";
import "./Tasks.css";

const TaskCard = props => {
  return (
    <div className="tasks-card">
      <div className="task-card-content">
        <h3 className="card-taskname">Task: {props.task.name}</h3>
        <p>Expected Completion Date: {props.task.expectedCompletion}</p>
        <button
          className="task-delete-button"
          type="button"
          onClick={() => props.deleteTask(props.task.id)}
        >
          Delete this Task
        </button>
        <button
          onClick={() => props.history.push(`/tasks/${props.task.id}/edit`)}
        >
          Edit This Task
        </button>
        <button
          className="is-task-complete"
          type="button"
          value={props.task.isComplete}
          onChange={props.handleIsComplete}
          onClick={() => props.updateTask(props.task)}
        >
          Mark Complete
        </button>
      </div>
    </div>
  );
};
export default TaskCard;
