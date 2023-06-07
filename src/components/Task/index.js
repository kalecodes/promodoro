import React from 'react';

function Task({ task })  {
  return (
    <div key={task.title} className="w-9/10 h-12 my-3 mx-auto rounded bg-gray-300 flex justify-between items-center">
      <p className="text-left ml-5">{task.title}</p>
      <img 
        src={require('../../assets/icons/menu-dark.png')}
        alt="task options"
        className="mr-5 w-7"
      />
      <div className="mr-5 h-full items-center hidden">
        <img 
          src={require('../../assets/icons/sub-dark.png')} 
          alt="add sub-task"
          className="w-8 ml-1"
        />
        <img 
          src={require('../../assets/icons/check-dark.png')} 
          alt="mark task complete"
          className="w-7 ml-1"
        />
        <img 
          src={require('../../assets/icons/delete-dark.png')} 
          alt="add sub-task"
          className="w-7 ml-1"
        />
        <img 
          src={require('../../assets/icons/close-dark.png')} 
          alt="close menu"
          className="w-7 ml-1"
        />
      </div>
    </div>
  )
}

export default Task;