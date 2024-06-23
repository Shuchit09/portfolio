import { motion } from 'framer-motion'
import React from 'react'

function Skill({data,mover,index,shower}) {
  return (
    <motion.div
      onMouseEnter={() => {
        shower(true);
      }}
      onMouseLeave={() => {
        shower(false);
      }}
      whileHover={{
        scale: 1.05,
        background: "linear-gradient(to left,#c33cb7, #ff38a1, #f56565)",
        boxShadow: "0 0 0.85em #c33cb7",
      }}
      transition={{
        duration: 0.5,
      }}
      className="w-full py-16 px-5 rounded-md h-[18rem]">
      <motion.div
        whileHover={() => {
          mover(index);
        }}
        className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-5xl capitalize font-medium">{data.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{data.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Skill