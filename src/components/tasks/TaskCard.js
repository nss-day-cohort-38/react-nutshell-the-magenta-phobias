import React, { useState } from "react";
import "./Tasks.css";
import ApiManager from "../../modules/ApiManager";

const TaskCard = (props, { isComplete, setIsComplete }) => {
  // console.log(props.task);
  // const [isComplete, setIsComplete] = useState();
  //   console.log(props.task);

  const handleIsComplete = e => {
    const stateToChange = { ...props };
    stateToChange[e.target.id] = e.target.value;
    setIsComplete(stateToChange);
  };
  const handleIsCompleteChange = async () => {
    await ApiManager.patch("tasks", props.task, { isComplete: true });
    const tasksFromAPI = await ApiManager.getAll("tasks");
    console.log(tasksFromAPI);
    // const completedTasks = tasksFromAPI.filter(task => !task.isComplete);
  };

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
          onChange={isComplete}
          onClick={() => props.updateTask(props.task)}
        >
          Mark Complete
        </button>

        {/* <button
          className="mark-complete-save-btn"
          type="button"
          // onChange={handleIsComplete}
          // checked={isComplete}
          onClick={handleIsComplete}
        >
          Save
        </button> */}
      </div>
    </div>
  );
};
export default TaskCard;
