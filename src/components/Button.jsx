import React from 'react'
import { motion } from "framer-motion";

function Button({textt}) {
  
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 0.45em #c33cb7",
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`min-w-44 px-3 py-${textt.pad} bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center`}>
      <button
        className="flex items-center text-white justify-center gap-1">
        <span className="text-base font-medium">{textt.title}</span>
        {textt.icon}
      </button>
    </motion.div>
  );
}

export default Button