import React from "react";

function Time() {
  return (
    <div className="h-3/4 flex flex-col justify-evenly items-center">
      <img 
        src={require('../../assets/icons/start-dark.png')}
        alt="start timer"
        className=""
      />
      <div className="text-4xl">25:00:00</div>
    </div>
  )
}

export default Time;