import React, { useState, useEffect } from "react";
// import Task from "../Task";
import TaskModal from "../TaskModal";

function Tasks()  {
  const [tasks, setTasks] = useState([]);
  const [newTaskModal, setNewTaskModal] = useState(false);

  const triggerModal = () => {
    setNewTaskModal(!newTaskModal);
  }

  const clearTasks = () =>{
    setTasks([]);
    localStorage.setItem("tasks", []);
  }

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, [])

  return(
    <section className="mt-5 lg:mt-0 lg:w-1/2 flex flex-col order-2 lg:order-none">
      {newTaskModal && <TaskModal newTaskModal={newTaskModal} setNewTaskModal={setNewTaskModal} tasks={tasks} setTasks={setTasks} />}
      <div className="text-2xl">Tasks</div>
      <div className="lg:w-9/10 lg:h-9/10 lg:m-auto flex flex-col">
        <div className="flex justify-between items-center w-4/5 mx-auto">
          <img 
            src={require('../../assets/icons/plus-dark.png')}
            alt="add new task"
            className="w-9"
            onClick={triggerModal}
          />
          <img 
            src={require('../../assets/icons/clear-dark.png')} 
            alt="clear all tasks"
            className="w-9"
            onClick={clearTasks}
          />
        </div>
        <div id="task-container" className="h-5/6 overflow-scroll order-3 lg:order-none">
          {tasks && tasks.map((task, i) => (
            <div key={i} className="w-9/10 h-12 my-3 mx-auto rounded bg-gray-300 flex justify-between items-center">
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
          ))}
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