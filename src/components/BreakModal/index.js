import React, { useEffect, useState } from "react";

function BreakModal({ onClose, breakTime }) {
  const [breakTimer, setBreakTimer] = useState('00:00:00');


  return (
    <div className="w-9/10 h-4/5 m-auto">
      <div className="text-xl">Break</div>
      <div className="">Nice job staying focused, we recommend a {breakTime} minute break!</div>
      <div className="text-3xl">{breakTimer}</div>
      <div className="text-xl">Close this modal when you are ready to continue.</div>
      <div className="text-xl p-2 rounded bg-gray-300" onClick={onClose}>Close Modal</div>
    </div>
  )
}

export default BreakModal;