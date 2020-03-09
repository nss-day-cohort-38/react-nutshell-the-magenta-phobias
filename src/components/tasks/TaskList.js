import React, { useState, useEffect } from "react";
import ApiManager from "../../modules/ApiManager";
import TaskCard from "./TaskCard";

const TaskList = props => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const tasksFromAPI = await ApiManager.getAll("tasks");
      setTasks(tasksFromAPI);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      ApiManager.delete("tasks", id);
      const tasksFromAPI = await ApiManager.getAll("tasks");
      setTasks(tasksFromAPI);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
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
      </section>
      <div className="task-container-cards">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task} // this is a prop ... in this case it is an object
            deleteTask={deleteTask}
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;
