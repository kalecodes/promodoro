import React from "react";

function Timer() {
  return (
    <div className="h-1/3 lg:h-1/2 flex flex-col">
      <div className="text-2xl">Timer</div>
      <div className="w-9/10 h-4/5 m-auto">
        <div>
          <button className="text-xl py-2 px-4 rounded-l bg-gray-400 ">25</button>
          <button className="text-xl py-2 px-4 bg-gray-300 ">35</button>
          <button className="text-xl py-2 px-4 bg-gray-300 ">45</button>
          <button className="text-xl py-2 px-4 rounded-r bg-gray-300 ">+</button>
        </div>
        <div className="h-3/4 flex flex-col justify-evenly items-center">
          <img 
            src={require('../../assets/icons/start-dark.png')}
            alt="start timer"
            className="w-16 py-3 lg:py-0"
          />
          <div className="text-3xl">25:00:00</div>
        </div>
        <div className="flex justify-evenly">
          <div className="text-xl">Completed: 0</div>
          <div className="text-xl">Break in: 4</div>
        </div>
      </div>
    </div>
  )
}

export default Timer;