import React, {useState} from "react";

function TaskModal({ newTaskModal, setNewTaskModal, tasks, setTasks }) {
  const [taskTitle, setTaskTitle] = useState('');

  const stopProp = (e) => {
    e.stopPropagation();
  }

  const handleChange = e => {
    const title = e.target.value;
    setTaskTitle(title);
  }

  const toggleModal = () => {
    setNewTaskModal(!newTaskModal);
  }

  const submitTask = (e) => {
    const task = {
      title: taskTitle,
      subTasks: []
    };

    const newTasksArr = [...tasks, task];
    setTasks(newTasksArr);
    // setTaskCount(newTasksArr.length);

    localStorage.setItem("tasks", JSON.stringify(newTasksArr));

    toggleModal();
  }

  return(
    <div className="inset-0 z-10 fixed bg-black/60" onClick={toggleModal}>
      <div className="w-2/5 h-2/5 mt-28 mx-auto bg-white rounded flex flex-col justify-around" onClick={stopProp}>
        <div className="text-3xl">Add a new task</div >
        <textarea placeholder="Task title..." className="w-2/3 p-2 mx-auto" onChange={handleChange} />
        <button className="w-32 p-2 mx-auto rounded bg-slate-300" onClick={submitTask}>Add Task</button>
      </div>
    </div>
  )
}

export default TaskModal;