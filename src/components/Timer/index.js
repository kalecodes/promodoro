import React, { useEffect, useState, useRef } from "react";

function Timer() {
  // need ref to keep track of interval and stop when needed
  const Ref = useRef(null);
  const [selectedTimer, setSelectedTimer] = useState(1)
  const [timer, setTimer] = useState('25:00');
  const [timerStarted, setTimerStarted] = useState(false);
  const [completed, setCompleted] = useState(0);
  const [remaining, setRemaining] = useState(4);
  const [breakModal, setBreakModal] = useState(false);
  const [breakTime, setBreakTime] = useState(5);

  const startBreak = () => {
    
  }

  const triggerBreakModal = () => {
    clearInterval(Ref.current);
    console.log(timer, timerStarted, completed, remaining);

    if (completed < 4) {
      setBreakTime(5)
    } else (
      setBreakTime(20)
    )

    
    breakModal(true);
    startBreak();
  }

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return {total, minutes, seconds};
  }

  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);

    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes: '0' + minutes) + ':' +
        (seconds > 9 ? seconds : '0' + seconds)
      )
    } else {
      setTimer(selectedTimer + ':00');
      setTimerStarted(false);
      setCompleted(completed + 1);
      setRemaining(remaining - 1);

      triggerBreakModal();
    }
  }

  const resetTimer = (e) => {
    setTimer(selectedTimer + ':00');

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000)
    Ref.current = id;
  }

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setMinutes(deadline.getMinutes() + selectedTimer);

    return deadline;
  }

  const handleClick = () => {
    setTimerStarted(true);

    if (timerStarted) {
      console.log('timer cannot be paused');
      return;
    }
    resetTimer(getDeadTime());
  }

  return (
    <div className="h-1/3 lg:h-1/2 flex flex-col">
      <div className="text-2xl">Timer</div>
      <div className="w-9/10 h-4/5 m-auto">
        <div>
          <button className="text-xl py-2 px-4 rounded-l bg-gray-300" onClick={() => {setSelectedTimer(25); setTimer('25:00')}}>25</button>
          <button className="text-xl py-2 px-4 bg-gray-300" onClick={() => {setSelectedTimer(35); setTimer('35:00')}}>35</button>
          <button className="text-xl py-2 px-4 bg-gray-300" onClick={() => {setSelectedTimer(45); setTimer('45:00')}}>45</button>
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
          <div className="text-xl">Completed: {completed}</div>
          <div className="text-xl">Break in: {remaining}</div>
        </div>
      </div>
    </div>
  )
}

export default Timer;