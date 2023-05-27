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
          <div className="w-9/10 h-1/10 mt-5 mx-auto bg-gray-300 flex justify-between items-center">
            <p className="text-left ml-5">This is an example task</p>
            <img 
              src={require('../../assets/icons/menu-dark.png')}
              alt="task options"
              className="mr-5 h-3/5"
            />
          </div>
          <div className="w-9/10 h-1/10 mt-5 mx-auto bg-gray-300 flex justify-between items-center">
            <p className="text-left ml-5">This is an example task</p>
            <div className="mr-5 h-full flex items-center">
              <img 
                src={require('../../assets/icons/sub-dark.png')} 
                alt="add sub-task"
                className="h-3/5 mx-1"
              />
              <img 
                src={require('../../assets/icons/check-dark.png')} 
                alt="mark task complete"
                className="h-3/5 mx-1"
              />
              <img 
                src={require('../../assets/icons/delete-dark.png')} 
                alt="add sub-task"
                className="h-3/5 mx-1"
              />
              <img 
                src={require('../../assets/icons/close-dark.png')} 
                alt="close menu"
                className="h-3/5 mx-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tasks;