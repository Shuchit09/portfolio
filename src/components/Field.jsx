import React, { useState } from 'react'
import {
  TbInnerShadowBottomRightFilled,
} from "react-icons/tb";
import { motion } from "framer-motion";


function Field({data}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        background: "linear-gradient(to left,#c33cb7, #ff38a1, #f56565)",
        boxShadow: "0 0 0.85em #c33cb7",
      }}
      transition={{
        duration: 0.5,
      }}
      className="flex items-center xl:w-2/5 py-8 px-10 rounded-lg  md:w-4/5 w-full">
      <div className="w-full border-b-[1px] border-zinc-100  h-fit py-4">
        <div className="up flex items-center justify-between">
          <h2
          style={{fontFamily:'Share Tech'}}
          className="text-6xl">{data.serial}</h2>
          <motion.div 
          animate={{rotate:"360deg"}}
          transition={{duration:1000}}
           className="">
            <TbInnerShadowBottomRightFilled className="md:text-6xl h-0" />
          </motion.div>
        </div>
        <div className="mid">
          <h1 className="text-white my-4 text-5xl">{data.title}</h1>
        </div>
        <div className="down mb-3">
          <p>{data.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Field