import React from 'react'
import { FaAngleRight } from "react-icons/fa";

function Button() {
  return (
    <div className="min-w-44 px-3 py-1 bg-zinc-200 text-slate-700 rounded-full flex items-center justify-center">
      <button className="flex items-center justify-center gap-1">
        <span className="text-base font-medium">Get in touch</span>
        <FaAngleRight />
      </button>
    </div>
  );
}

export default Button