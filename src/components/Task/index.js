import React from 'react';

function Task({ task })  {
  const toggleMenu = (e) => {
    e.target.className = "hidden"
  }

  return (
    <div key={task.title} className="w-9/10 h-12 my-3 mx-auto rounded bg-gray-300 flex justify-between items-center">
      <p className="text-left ml-5">{task.title}</p>
      <img 
        src={require('../../assets/icons/menu-dark.png')}
        alt="task options"
        className="mr-5 w-7"
        data-id="menu"
        onClick={toggleMenu}
      />
      <div className="mr-5 h-full items-center hidden" data-id="menu-div">
        <img 
          src={require('../../assets/icons/sub-dark.png')} 
          alt="add sub-task"
          className="w-8 ml-1"
          data-id="subtask"
        />
        <img 
          src={require('../../assets/icons/check-dark.png')} 
          alt="mark task complete"
          className="w-7 ml-1"
          data-id="complete"
        />
        <img 
          src={require('../../assets/icons/delete-dark.png')} 
          alt="delete task"
          className="w-7 ml-1"
          data-id="delete"
        />
        <img 
          src={require('../../assets/icons/close-dark.png')} 
          alt="close menu"
          className="w-7 ml-1"
          data-id="close"
        />
      </div>
    </div>
  )
}

export default Task;