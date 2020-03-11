import React, { useState, useEffect } from "react";
import ApiManager from "../../modules/ApiManager";
import TaskCard from "./TaskCard";

const TaskList = (props, { setIsComplete }) => {
  const [tasks, setTasks] = useState([]);

  const getUncompleted = async () => {
    try {
      const tasksFromAPI = await ApiManager.getUncompleted("tasks");
      setTasks(tasksFromAPI);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async task => {
    try {
      await ApiManager.patch("tasks", task, { isComplete: true });
      const tasksFromAPI = await ApiManager.getUncompleted("tasks");
      setTasks(tasksFromAPI);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async id => {
    try {
      await ApiManager.delete("tasks", id);
      const tasksFromAPI = await ApiManager.getUncompleted("tasks");
      setTasks(tasksFromAPI);
    } catch (error) {
      console.log(error);
    }
  };
  const handleIsComplete = e => {
    const stateToChange = { ...tasks };
    stateToChange[e.target.id] = e.target.value;
    setIsComplete(stateToChange);
  };

  useEffect(() => {
    getUncompleted();
  }, []);

  return (
    <>
      <section className="task-section-content">
        <button
          type="add-task-button"
          className="btn"
          onClick={() => {
            props.history.push("/tasks/new");
          }}
        >
          Add New Task
        </button>
        <button
          type="completed-task-button"
          className="btn"
          onClick={() => {
            props.history.push("/tasks/completed");
          }}
        >
          See Completed Tasks
        </button>
      </section>

      <div className="task-container-cards">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
            handleIsComplete={handleIsComplete}
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;
