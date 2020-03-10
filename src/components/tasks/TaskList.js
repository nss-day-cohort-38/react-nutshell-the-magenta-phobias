import React, { useState, useEffect } from "react";
import ApiManager from "../../modules/ApiManager";
import TaskCard from "./TaskCard";

const TaskList = (props, { isComplete, setIsComplete }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const tasksFromAPI = await ApiManager.getAll("tasks");
      setTasks(tasksFromAPI);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async id => {
    try {
      ApiManager.delete("tasks", id);
      const tasksFromAPI = await ApiManager.getAll("tasks");
      setTasks(tasksFromAPI);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(props);
  const handleMarkComplete = async task => {
    // setIsComplete(e.target.checked);
    ApiManager.update("tasks", task.isComplete).then(() => {
      if (isComplete === true) {
        props.task.isComplete = true;
        ApiManager.getTasks(tasks).then(tasks => {
          // console.log({ tasks });
          tasks.filter(task => {
            const isNotComplete = task.isComplete === false;
            setTasks(isNotComplete);
          });
        });
      }
    });
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
            task={task}
            deleteTask={deleteTask}
            handleMarkComplete={handleMarkComplete}
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;
