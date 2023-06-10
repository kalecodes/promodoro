import React, { useState, useEffect } from "react";
import Task from "../Task";
import TaskModal from "../TaskModal";
import SubtaskModal from "../SubtaskModal";

function Tasks()  {
  const [tasks, setTasks] = useState([]);
  const [newTaskModal, setNewTaskModal] = useState(false);
  const [subtaskModal, setSubtaskModal] = useState(false);
  const [focusedTaskTitle, setFocusedTaskTitle] = useState('')
  const [taskCount, setTaskCount] = useState(0);

  const triggerModal = () => {
    setNewTaskModal(!newTaskModal);
  }

  const clearTasks = () => {
    setTasks([]);
    localStorage.setItem("tasks", JSON.stringify([]));
  }

  const triggerSubtaskModal = (e) => {
    setFocusedTaskTitle(e.target.parentElement.parentElement.textContent);
    setSubtaskModal(!subtaskModal);
  }

  const deleteTask = (e) => {
    const taskText = e.target.parentElement.parentElement.firstChild.textContent;
    const tempArray = tasks.filter(task => {
      return task.title !== taskText
    });

    setTasks(tempArray);
    localStorage.setItem("tasks", JSON.stringify(tempArray));
  }

  const deleteSubtask = (e) => {
    const mainTaskTitle = e.target.parentElement.parentElement.parentElement.firstChild.textContent;
    const subtaskTitle = e.target.parentElement.parentElement.firstChild.textContent;

    const tempArray = tasks;

    const taskObjIndex = tempArray.findIndex(task => task.title === mainTaskTitle);

    const tempSubArray = tempArray[taskObjIndex].subTasks.filter(subtask => {
      return subtask !== subtaskTitle;
    });

    tempArray[taskObjIndex].subTasks = tempSubArray;

    setTasks(tempArray);
    localStorage.setItem("tasks", JSON.stringify(tempArray));
  }

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
      setTaskCount(savedTasks.length);
    }
  }, [])

  return(
    <section className="mt-5 lg:mt-0 lg:w-1/2 flex flex-col order-2 lg:order-none">
      {newTaskModal && <TaskModal newTaskModal={newTaskModal} setNewTaskModal={setNewTaskModal} tasks={tasks} setTasks={setTasks} setTaskCount={setTaskCount} />}
      {subtaskModal && <SubtaskModal subtaskModal={subtaskModal} setSubtaskModal={setSubtaskModal} focusedTaskTitle={focusedTaskTitle} setFocusedTaskTitle={setFocusedTaskTitle} tasks={tasks} setTasks={setTasks}/>}
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
          {tasks && tasks.map((task) => <Task task={task} triggerSubtaskModal={triggerSubtaskModal} deleteTask={deleteTask} deleteSubtask={deleteSubtask} key={task.title}/>)}
        </div>
        <div className="h-1/10 flex justify-center items-center order-2 lg:order-none">
          <div className="w-1/3 min-w-fit h-7 rounded bg-gray-300">
            0/{taskCount} Completed
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tasks;