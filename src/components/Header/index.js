import React from "react";

function Header() {
  return (
    <header className="flex justify-between p-5 items-center">
      <div className="text-3xl"><span className="font-bold">Pro</span>modoro</div>
      <div >
        <div className="w-12 h-6 border-2 border-black rounded-full relative">
          <div className="w-6 h-6 border-2 border-black rounded-full absolute  -top-0.5 -left-0.5">

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;