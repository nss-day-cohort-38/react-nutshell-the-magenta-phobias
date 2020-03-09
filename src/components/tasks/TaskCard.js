import React from "react";
import "./Tasks.css";
import { Link } from "react-router-dom";

const TaskCard = props => {
    console.log(props);
//     const [isComplete, setIsComplete] = useState(false);

//   const handleIsComplete = e => {
//     setIsComplete(e.target.checked);
//   };

//   const completedTask = () => {
// if (isComplete === true) {

// }
//   };

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
          >Edit This Task</button>
        <label className="is-task-complete">Mark Complete</label>
        <input
          className="task-checkbox"
          type="checkbox"
        //   onChange={handleIsComplete}
        ></input>
      </div>
    </div>
  );
};

export default TaskCard;
