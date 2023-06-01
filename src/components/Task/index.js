import React from 'react';

function Task()  {
  return (
    <>
    <div className="w-9/10 h-12 my-3 mx-auto rounded bg-gray-300 flex justify-between items-center">
      <p className="text-left ml-5">This is an example task</p>
      <img 
        src={require('../../assets/icons/menu-dark.png')}
        alt="task options"
        className="mr-5 w-7"
      />
    </div>
    <div className="w-9/10 h-12 my-3 mx-auto rounded bg-gray-300 flex justify-between items-center">
      <p className="text-left ml-5">This is another example task</p>
      <div className="mr-5 h-full flex items-center">
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
    </>
  )
}

export default Task;