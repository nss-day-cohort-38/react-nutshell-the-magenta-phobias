import React, { useState, useEffect } from "react";
import "./Tasks.css";
import ApiManager from "../../modules/ApiManager";

const CompletedTasks = props => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    ApiManager.getCompleted().then(resultFromAPI => {
      console.log(resultFromAPI);
      setTasks(resultFromAPI);
    });
  }, []);


  // HACKS...should pass to component instead.
  return (
    <div className="tasks-card">
      {tasks.map(task => (
        <div className="task-card-content">
          <h3 className="card-taskname">Task: {task.name}</h3>
          <p>Expected Completion Date: {task.expectedCompletion}</p>
          <button
            className="is-task-complete"
            type="button"
            //   value={tasks.isComplete}
            onClick={() => props.history.push(`/tasks`)}
          >
            Back To Tasks
          </button>
        </div>
      ))}
    </div>
  );
};
export default CompletedTasks;
