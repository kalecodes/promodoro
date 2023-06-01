import React from "react";
import Task from "../Task";

function Tasks()  {
  return(
    <section className="mt-5 lg:mt-0 lg:w-1/2 flex flex-col order-2 lg:order-none">
      <div className="text-2xl">Tasks</div>
      <div className="lg:w-9/10 lg:h-9/10 lg:m-auto flex flex-col">
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
        <div id="task-container" className="h-5/6 overflow-scroll order-3 lg:order-none">
          <Task />
        </div>
        <div className="h-1/10 flex justify-center items-center order-2 lg:order-none">
          <div className="w-1/3 min-w-fit h-7 rounded bg-gray-300">
            0/2 Completed
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tasks;