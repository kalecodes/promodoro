import React, { useState } from 'react';

function SubtaskModal({ subtaskModal, setSubtaskModal, focusedTaskTitle, setFocusedTaskTitle, tasks, setTasks }) {
  const [subtaskTitle, setSubtaskTitle] = useState("");

  const handleChange = e => {
    const subtask = e.target.value;
    setSubtaskTitle(subtask);
  }

  const submitSubtask = () => {
    console.log(focusedTaskTitle);
    console.log(subtaskTitle);

    const tempArray = tasks;
    const taskObjIndex = tempArray.findIndex((task => task.title === focusedTaskTitle));
    console.log(taskObjIndex);

    tempArray[taskObjIndex].subTasks.push(subtaskTitle);
    console.log(tempArray);

    setTasks(tempArray);
    localStorage.setItem("tasks", JSON.stringify(tempArray));

    setFocusedTaskTitle('');
    setSubtaskModal(!subtaskModal);
  };

  return(
    <div className="inset-0 z-10 fixed bg-black/60">
      <div className="w-2/5 h-2/5 mt-28 mx-auto bg-white rounded flex flex-col justify-around">
        <div className="text-3xl">Add a Subtask</div>
        <textarea placeholder="Task title..." className="w-2/3 p-2 mx-auto" onChange={handleChange}/>
        <button className="w-32 p-2 mx-auto rounded bg-slate-300" onClick={submitSubtask}>Add Subtask</button>
      </div>
    </div>
  )
}

export default SubtaskModal;