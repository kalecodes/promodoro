import React, { useEffect, useState, useRef } from "react";

function Timer() {
  // need ref to keep track of interval and stop when needed
  const Ref = useRef(null);
  const [selectedTimer, setSelectedTimer] = useState(25)
  const [timer, setTimer] = useState('25:00');

  const getTimeRemaining = (e) => {
    console.log(e);
    const total = Date.parse(e) - Date.parse(new Date());
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    console.log(total, minutes, seconds);
    return {total, minutes, seconds};
  }

  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);

    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes: '0' + minutes) + ':' +
        (seconds > 9 ? seconds : '0' + seconds)
      )
    }
  }

  // const clearTimer = (e) => {
  //   setTimer(selectedTimer);

  //   if (Ref.current) clearInterval(Ref.current);
  //   const id = setInterval(() => {
  //     startTimer(e);
  //   }, 1000)
  //   Ref.current = id;
  // }

  const getDeadTime = () => {
    let deadline = new Date();
    console.log(deadline);
    deadline.setMinutes(deadline.getMinutes() + selectedTimer);

    console.log(deadline);
    return deadline;
  }

  const resetTimer = (e) => {
    setTimer(selectedTimer + ':00');
    console.log(timer);

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000)
    Ref.current = id;
  }

  const handleClick = () => {
    resetTimer(getDeadTime());
  }
  // start timer as soon as possible when component mounts
  // useEffect(() => {
  //   clearTimer(getDeadTime());
  // }, []);

  return (
    <div className="h-1/3 lg:h-1/2 flex flex-col">
      <div className="text-2xl">Timer</div>
      <div className="w-9/10 h-4/5 m-auto">
        <div>
          <button className="text-xl py-2 px-4 rounded-l bg-gray-400" onClick={() => {setSelectedTimer('25:00'); setTimer('25:00')}}>25</button>
          <button className="text-xl py-2 px-4 bg-gray-300" onClick={() => {setSelectedTimer('35:00'); setTimer('35:00')}}>35</button>
          <button className="text-xl py-2 px-4 bg-gray-300" onClick={() => {setSelectedTimer('45:00'); setTimer('45:00')}}>45</button>
          <button className="text-xl py-2 px-4 rounded-r bg-gray-300">+</button>
        </div>
        <div className="h-3/4 flex flex-col justify-evenly items-center">
          <img 
            src={require('../../assets/icons/start-dark.png')}
            alt="start timer"
            className="w-16 py-3 lg:py-0"
            onClick={() => handleClick(selectedTimer)}
          />
          <div className="text-3xl">{timer}</div>
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