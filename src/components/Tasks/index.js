import React from "react";
import Task from "../Task";

function Tasks()  {
  return(
    <section className="md:w-1/2 flex flex-col">
      <div className="text-2xl">Tasks</div>
      <div className="md:w-9/10 md:h-9/10 md:m-auto">
        <div className="flex justify-between items-center w-4/5 mx-auto">
          <img 
            src={require('../../assets/icons/plus-dark.png')}
            alt="add new task"
            className="w-9"
          />
          <img 
            src={require('../../assets/icons/clear-dark.png')} 
            alt="clear all tasks"
            className="w-9"
          />
        </div>
        <div id="task-container" className="h-5/6 overflow-scroll">
          <Task />
        </div>
        <div className="h-1/10 flex justify-center items-center">
          <div className="w-1/3 h-7 rounded bg-gray-300">
            0/2 Completed
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tasks;