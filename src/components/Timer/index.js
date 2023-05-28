import React from "react";
import Time from "../Time";

function Timer() {
  return (
    <div className="h-1/2 flex flex-col">
      <div className="text-2xl">Timer</div>
      <div className="w-9/10 h-4/5 m-auto">
        <div>
          <button className="text-xl py-2 px-4 bg-gray-300 border-2 border-black">25</button>
          <button className="text-xl py-2 px-4 bg-gray-300 border-2 border-black">35</button>
          <button className="text-xl py-2 px-4 bg-gray-300 border-2 border-black">45</button>
          <button className="text-xl py-2 px-4 bg-gray-300 border-2 border-black">+</button>
        </div>
        <Time />
        <div className="flex justify-evenly">
          <div className="text-xl">Completed: 0</div>
          <div className="text-xl">Break in: 4</div>
        </div>
      </div>
    </div>
  )
}

export default Timer;