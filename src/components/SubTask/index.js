import React, { useState } from 'react';

function SubTask({ subtask, deleteSubtask }) {
  const [subtaskMenu, setSubtaskMenu] = useState(false);
  const [subtaskComplete, setSubtaskComplete] = useState(false);

  const toggleMenu = (e) => {
    setSubtaskMenu(!subtaskMenu);
  }

  const completeTask = () => {
    setSubtaskComplete(!subtaskComplete);
  }

  return(
    <div key={subtask} className={subtaskComplete ? "bg-green-400 w-4/5 h-12 my-3 mx-auto rounded flex justify-between items-center" : "bg-gray-300 w-4/5 h-12 my-3 mx-auto rounded flex justify-between items-center"}>
      <p className="text-left ml-5">{subtask}</p>
      <img 
        src={require('../../assets/icons/menu-dark.png')}
        alt="task options"
        className={subtaskMenu ? "mr-5 w-7 hidden" : "mr-5 w-7"}
        onClick={toggleMenu}
      />
      <div className={subtaskMenu ? "mr-5 h-full flex items-center" : "mr-5 h-full items-center hidden"}>
        <img 
          src={require('../../assets/icons/check-dark.png')} 
          alt="mark task complete"
          className="w-7 ml-1"
          onClick={completeTask}
        />
        <img 
          src={require('../../assets/icons/delete-dark.png')} 
          alt="delete task"
          className="w-7 ml-1"
          onClick={deleteSubtask}
        />
        <img 
          src={require('../../assets/icons/close-dark.png')} 
          alt="close menu"
          className="w-7 ml-1"
          onClick={toggleMenu}
        />
      </div>
    </div>
  )
}

export default SubTask;