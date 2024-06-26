import React from 'react'
import { motion } from "framer-motion";

function Button({
  properties,
  pad,
  custom = "min-w-36 px-3 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center",
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 0.45em #c33cb7",
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`${custom}`}>
      <button className="flex items-center text-white justify-center gap-1">
        <span className="text-base font-medium">{properties.title}</span>
        {properties.icon}
      </button>
    </motion.div>
  );
}

export default Button