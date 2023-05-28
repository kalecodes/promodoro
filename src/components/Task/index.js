import React from 'react';

function Task()  {
  return (
    <>
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
    </>
  )
}

export default Task;