import React, { useEffect, useState } from "react";

function BreakModal({ pomCount, breakModal, setBreakModal, Ref }) {

  const [breakTimer, setBreakTimer] = useState('00:00:00');

  const getTimePassed = (startTime) => {
    const total = Date.parse(new Date()) - Date.parse(startTime);
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);

    return {total, hours, minutes, seconds};
  }

  const incTimer = (startTime) => {
    let { total, hours, minutes, seconds } = getTimePassed(startTime);

    if (total >= 0) {
      setBreakTimer(
        (hours > 9 ? hours : '0' + hours) + ":" + 
        (minutes > 9 ? minutes : '0' + minutes) + ":" + 
        (seconds > 9 ? seconds : '0' + seconds)
      )
    }
  }

  const startTimer = (startTime) => {
    if (Ref.current[1]) clearInterval(Ref.current[1]);
    const id = setInterval(() => {
      incTimer(startTime);
    }, 1000)
    Ref.current[1] = id;
  }

  const getTime = () => {
    let startTime = new Date();
    return startTime;
  }

  useEffect(() => {
    startTimer(getTime());
  }, []);

  const toggleModal = () => {
    clearInterval(Ref.current[1]);
    setBreakModal(!breakModal);
  }

  return (
    <div className="inset-0 z-10 fixed bg-black/60">
      <div className="w-3/5 h-3/5 mt-28 mx-auto bg-white rounded flex flex-col justify-evenly">
        <div className="text-3xl">Break</div>
        <div>
          {pomCount === 4 
            ? <>
              <div className="text-xl">Congrats! You have completed 4 pomodoros. Time for a longer break!</div>
              <div className="text-xl">We recommend a 20 minute break.</div>
            </> : <> 
              <div className="text-xl">Nice job staying focused! Time for a short break.</div>
              <div className="text-xl">We recommend a 5 minute break.</div>
            </>
          }
        </div>
        <div className="text-3xl">{breakTimer}</div>
        <div className="text-lg">Close this modal when you are ready to continue.</div>
        <div className="w-36 mx-auto text-xl p-2 rounded bg-gray-300" onClick={toggleModal}>Close Modal</div>
      </div>
    </div>
    
  )
}

export default BreakModal;