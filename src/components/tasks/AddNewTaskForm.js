import React, { useState } from "react";
import ApiManager from "../../modules/ApiManager";
import "./TaskForm.css";

const AddNewTaskForm = props => {
  const [task, setTask] = useState({
    name: "",
    expectedCompletion: "",
    isComplete: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...task };
    stateToChange[evt.target.id] = evt.target.value;
    setTask(stateToChange);
  };

  const constructNewTask = evt => {
    evt.preventDefault();
    if (task.name === "" || task.expectedCompletion === "") {
      window.alert("Please fill out all fields");
    } else {
      setIsLoading(true);
      ApiManager.post("tasks", task).then(() => props.history.push("/tasks"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="What do you need to do?"
            />
            <label htmlFor="phoneNumber">Task Name</label>
            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="expectedCompletion"
              placeholder="Enter your date to complete by"
            />
            <label htmlFor="name">Expected Completion</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewTask}
            >
              Submit
            </button>
          </div>
          <div className="isComplete-selection">
            <label>Select if this is complete</label>
            <button className="true" type="button" disabled={isLoading}>
              True
            </button>
            <button className="true" type="button" disabled={isLoading}>
              False
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AddNewTaskForm;
