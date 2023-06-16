import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import SubTask from '../SubTask';

function Task({ task, triggerSubtaskModal, deleteTask, deleteSubtask })  {
  const [taskMenu, setTaskMenu] = useState(false);
  const [taskComplete, setTaskComplete] = useState(false);

  const toggleMenu = (e) => {
    setTaskMenu(!taskMenu);
  }

  const completeTask = () => {
    setTaskComplete(!taskComplete);
  }

  return (
    <div>
      <div key={task.title} className={taskComplete ? "bg-green-400 w-9/10 h-12 my-3 mx-auto rounded flex justify-between items-center" : "bg-gray-300 w-9/10 h-12 my-3 mx-auto rounded flex justify-between items-center"}>
        <p className="text-left ml-5">{task.title}</p>
        <img 
          src={require('../../assets/icons/menu-dark.png')}
          alt="task options"
          className={taskMenu ? "mr-5 w-7 hidden" : "mr-5 w-7"}
          onClick={toggleMenu}
          data-tooltip-id="task-menu-tt"
          data-tooltip-content="Task Menu"
        />
        <Tooltip id="task-menu-tt" />
        <div className={taskMenu ? "mr-5 h-full flex items-center" : "mr-5 h-full items-center hidden"}>
          <img 
            src={require('../../assets/icons/sub-dark.png')} 
            alt="add sub-task"
            className="w-8 ml-1"
            onClick={triggerSubtaskModal}
            data-tooltip-id="add-sub-tt"
            data-tooltip-content="Add a Subtask"
          />
          <Tooltip id="add-sub-tt" />
          <img 
            src={require('../../assets/icons/check-dark.png')} 
            alt="mark task complete"
            className="w-7 ml-1"
            onClick={completeTask}
            data-tooltip-id="complete-task-tt"
            data-tooltip-content="Mark Task as Complete"
          />
          <Tooltip id="complete-task-tt" />
          <img 
            src={require('../../assets/icons/delete-dark.png')} 
            alt="delete task"
            className="w-7 ml-1"
            onClick={deleteTask}
            data-tooltip-id="delete-task-tt"
            data-tooltip-content="Delete Task"
          />
          <Tooltip id="delete-task-tt" />
          <img 
            src={require('../../assets/icons/close-dark.png')} 
            alt="close menu"
            className="w-7 ml-1"
            onClick={toggleMenu}
            data-tooltip-id="close-menu-tt"
            data-tooltip-content="Close Menu"
          />
          <Tooltip id="close-menu-tt" />
        </div>
      </div>
      {task.subTasks && task.subTasks.map((subtask) => <SubTask subtask={subtask} deleteSubtask={deleteSubtask} key={subtask}/>)}
    </div>
  )
}

export default Task;