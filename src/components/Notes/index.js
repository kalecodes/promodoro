import React, { useEffect, useState } from "react";

function Notes() {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [])

  const handleChange = e => {
    const notes = e.target.value;
    setNotes(notes);
    localStorage.setItem("notes", notes);
  }

  return (
    <div className="h-1/2 lg:flex flex-col hidden lg:display">
      <div className="text-2xl">Notes</div>
      <div className="w-9/10 h-4/5 m-auto">
        <textarea placeholder="Keep your notes here..." className="w-full h-full p-2" value={notes} onChange={handleChange}>

        </textarea>
      </div>
    </div>
    
  )
}

export default Notes;