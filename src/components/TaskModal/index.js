import React from "react";

function TaskModal({handleNewTask}) {

  return(
    <div className="inset-0 z-10 fixed bg-black/60">
      <div className="w-2/5 h-2/5 mt-28 mx-auto bg-white rounded flex flex-col justify-around">
        <div className="text-3xl">Add a new task</div>
        <textarea placeholder="Task title..." className="w-2/3 p-2 mx-auto" />
        <button className="w-32 p-2 mx-auto rounded bg-slate-300" onClick={handleNewTask}>Add Task</button>
      </div>
    </div>
  )
}

export default TaskModal;