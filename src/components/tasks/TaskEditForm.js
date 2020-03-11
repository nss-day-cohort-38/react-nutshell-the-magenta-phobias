import React, { useState, useEffect } from "react";
import ApiManager from "../../modules/ApiManager";
import "./TaskForm.css";

const TaskEditForm = props => {
  const [task, setTask] = useState({
    name: "",
    expectedCompletion: "",
    isComplete: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  // const handleFieldChange = event => {
  //   const stateToChange = { ...task };
  //   stateToChange[event.target.id] = event.target.value;
  //   setTask(stateToChange);
  // };

  const handleFieldChange = e => {
    setTask(e.target.value);
  };
  const updateExistingTask = event => {
    event.preventDefault();
    setIsLoading(true);

    const editedTask = {
      id: props.match.params.taskId,
      name: task.name,
      expectedCompletion: task.expectedCompletion,
      isComplete: task.isComplete
    };
    ApiManager.update("tasks", editedTask).then(() =>
      props.history.push("/tasks")
    );
  };

  useEffect(() => {
    ApiManager.get("tasks", props.match.params.taskId).then(task => {
      setTask(task);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="task-name-edit"
              value={task.name}
            />
            <label htmlFor="task-name">Task</label>

            <input
              type="date"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="completion-date"
              value={task.role}
            />
            <label htmlFor="expectedCompletion">Expected Completion Date</label>
            <input
              type="checkbox"
              className="is-checked-edit-form"
              onChange={handleFieldChange}
              id="is-complete-box"
              value={task.isComplete}
            />
            <label>Is Complete</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading} // disabled will always take boolean value, isLoading infers that it is a boolean.
              onClick={updateExistingTask}
              className="submit-edit-button"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default TaskEditForm;
