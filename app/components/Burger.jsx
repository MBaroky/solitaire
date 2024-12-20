import React from "react";

function Burger({ isOpen, handleClick }) {
  return (
    <div
      className='flex flex-row cursor-pointer text-white'
      onClick={handleClick}>
      <button className='flex flex-col justify-center items-center w-20'>
        <span
          className={`bg-slate-50 block transition-all duration-300 ease-out
              h-0.5 w-6 rounded-sm ${
                isOpen
                  ? "rotate-45 translate-y-1"
                  : "-translate-y-0.5"
              }`}></span>
        <span
          className={`bg-slate-50 block transition-all duration-300 ease-out
              h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}></span>
        <span
          className={`bg-slate-50 block transition-all duration-300 ease-out
              h-0.5 w-6 rounded-sm ${
                isOpen
                  ? "-rotate-45 -translate-y-1"
                  : "translate-y-0.5"
              }`}></span>
      </button>
      <span>Menu</span>
    </div>
  );
}

export default Burger;
