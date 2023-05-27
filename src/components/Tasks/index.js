import React from "react";

function Tasks()  {
  return(
    <section className="w-1/2 flex flex-col">
      <div className="text-2xl">Tasks</div>
      <div className="w-9/10 h-9/10 m-auto">
        <div className="flex justify-between items-center h-1/10">
          <img 
            src={require('../../assets/icons/plus-dark.png')}
            alt="add new task"
            className="h-3/5 ml-5"
          />
          <img 
            src={require('../../assets/icons/clear-dark.png')} 
            alt="clear all tasks"
            className="h-3/5 mr-5"
          />
        </div>
        <div id="task-container" className="h-9/10 overflow-scroll">

        </div>
      </div>
    </section>
  )
}

export default Tasks;