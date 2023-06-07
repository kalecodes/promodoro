import React, {useState} from "react";

function TaskModal({ newTaskModal, setNewTaskModal, tasks, setTasks}) {
  const [taskTitle, setTaskTitle] = useState('');

  const handleChange = e => {
    const title = e.target.value;
    setTaskTitle(title);
  }

  const submitTask = () => {
    const task = {
      title: taskTitle,
      subTasks: []
    };

    const newTasksArr = [...tasks, task];
    setTasks(newTasksArr);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    setNewTaskModal(!newTaskModal);
  }

  return(
    <div className="inset-0 z-10 fixed bg-black/60">
      <div className="w-2/5 h-2/5 mt-28 mx-auto bg-white rounded flex flex-col justify-around">
        <div className="text-3xl">Add a new task</div>
        <textarea placeholder="Task title..." className="w-2/3 p-2 mx-auto" onChange={handleChange}/>
        <button className="w-32 p-2 mx-auto rounded bg-slate-300" onClick={submitTask}>Add Task</button>
      </div>
    </div>
  )
}

export default TaskModal;