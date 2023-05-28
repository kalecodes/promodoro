import React from "react";

function Notes() {
  return (
    <div className="h-1/2 flex flex-col">
      <div className="text-2xl">Notes</div>
      <div className="w-9/10 h-4/5 m-auto">
        <textarea placeholder="Keep your notes here..." className="w-full h-full p-2">

        </textarea>
      </div>
    </div>
    
  )
}

export default Notes;