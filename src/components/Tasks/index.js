import React from "react";
import Task from "../Task";

function Tasks()  {
  return(
    <section className="w-1/2 flex flex-col">
      <div className="text-2xl">Tasks</div>
      <div className="w-9/10 h-9/10 m-auto">
        <div className="flex justify-between items-center h-1/10 w-4/5 mx-auto">
          <img 
            src={require('../../assets/icons/plus-dark.png')}
            alt="add new task"
            className="h-3/5 "
          />
          <img 
            src={require('../../assets/icons/clear-dark.png')} 
            alt="clear all tasks"
            className="h-3/5 "
          />
        </div>
        <div id="task-container" className="h-4/5 overflow-scroll">
          <Task />
        </div>
        <div className="h-1/10 flex justify-center items-center">
          <div className="w-1/3 h-1/2 bg-gray-300">
            0/2 Completed
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tasks;