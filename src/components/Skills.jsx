import React, { useState } from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion';

function Skills({skills}) {
  
  const [show,setShow]=useState(false)
  const [pos,setPos]=useState(0)
  const shower=(state)=>setShow(state)
  const mover=(val)=>
    {setPos(val*18)}

  
  return (
    <div className="my-28 relative select-none flex flex-col items-center">
      <h1
        style={{ fontFamily: "JetBrains Mono" }}
        className="mb-10 text-[96px] font-bold ">
        Skills
      </h1>
      <div className="w-full border-b-[1px] bg-zinc-200"></div>
      <div className="">
        {skills.map((item, i) => (
          <Skill index={i} shower={shower} mover={mover} data={item}></Skill>
        ))}
        {show ? (
          <div className=" absolute mt-10 top-36 w-full h-full pointer-events-none">
            <motion.div
              style={{
                boxShadow: "0 0 0.85em #444",
              }}
              initial={{ y: pos, x: "-50%" }}
              animate={{ y: pos + `rem` }}
              className="window rounded-lg absolute left-[48%] w-[20rem] h-[18rem] overflow-hidden">
              {skills.map((elem, i) => {
                return (
                  <motion.div
                    style={{
                      scale: 1.05,
                      background:
                        "linear-gradient(to left bottom,#c33cb7, #ff38a1, #f56565)",
                    }}
                    animate={{ y: -pos + `rem` }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                    className="rounded-lg w-full h-full bg-zinc-800 flex items-center justify-center">
                    <h1 className="text-[200px]">{i + 1}</h1>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Skills