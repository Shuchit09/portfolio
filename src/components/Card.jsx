import React from 'react'
import { FaArrowRightLong, FaAngleRight } from "react-icons/fa6";
import Button from './Button';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom'

function Card({width,start,para,hover,pre,main}) {
  return (
    <motion.div
      whileHover={hover}
      className={`bg-zinc-800 p-7 xl:p-5 rounded-xl ${width} min-h-fit lg:min-h-[28rem] xl:min-h-[30rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3 className=" text-[12px] sm:text-[18px]">{pre}</h3>
          <FaArrowRightLong />
        </div>
        <h1 className="text-base sm:text-lg md:text-xl lg:text-3xl mt-5 mb-5 sm:mb-10 lg:mb-0 tracking-wider">{main}</h1>
      </div>
      <div className="down w-full">
        {start ? (
          <div className="">
            <h1 className=" text-[36px] sm:text-[52px] md:text-[68px] lg:text-[86px] xl:text-[96px] font-regular tracking-tight leading-none capitalize">
              start a project
            </h1>
            <a href='./Form'>
              <Button
                properties={{ title: "Contact Me", icon: <FaAngleRight /> }}
                pad="2"
                custom="rounded-full py-2 px-3 bg-transparent border-[1px] border-zinc-100 w-36 flex items-center justify-center mt-3"></Button>
            </a>
          </div>
        ) : (
          ""
        )}

        {para ? (
          <p className="text-sm text-zinc-400 font-medium">
            "Stay hungry, Stay Foolish" <br></br> -<i>Steve Jobs</i>
          </p>
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
}

export default Card