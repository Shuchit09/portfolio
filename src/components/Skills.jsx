import React, { useState } from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion';

function Skills() {
  var skills = [
    {
      title: "React JS",
      logo: "",
      desc: "React is a JavaScript library for building user interfaces (UIs) on the web. It follows a declarative, component-based approach and optimizes rendering performance using the Virtual DOM.",
    },
    {
      title: "GSAP",
      logo: "",
      desc: "GSAP (GreenSock Animation Platform) is a robust JavaScript library for creating high-performance, smooth animations and transitions on the web, widely used for its ease of use and extensive functionality.",
    },
    {
      title: "Shery JS",
      logo: "",
      desc: "Shery.js is a JavaScript library designed to enhance web animations and interactions. It provides various effects such as mouse followers, mask zoomers, magnet attractors, and 3D image effects. Integrating seamlessly with GSAP and Three.js, it offers engaging visual experiences and custom scroll behaviors for dynamic web designs​.",
    },
    {
      title: "Framer Motion",
      logo: "",
      desc: "Framer Motion is a popular React library for creating smooth, declarative animations. It offers powerful tools for gesture-based interactions, layout transitions, and animations, enhancing user experience with minimal code.",
    },
    {
      title: "Locomotive JS",
      logo: "",
      desc: "Locomotive JS is a JavaScript library for creating smooth, performant scrolling effects. It detects elements in the viewport, applying CSS transformations to create animations like parallax scrolling. Its flexible API supports various scroll effects, making it ideal for interactive web design",
    },
    {
      title: "Material UI",
      logo: "",
      desc: "Material UI is a popular React component library that implements Google's Material Design. It offers pre-designed, customizable components that simplify building responsive, attractive user interfaces with minimal effort. It enhances development speed and UI consistency​.",
    },
    {
      title: "JavaScript",
      logo: "",
      desc: "JavaScript is a versatile, high-level programming language primarily used for creating dynamic web pages. It enables interactive content, server-side development, and is integral to web technologies alongside HTML and CSS.",
    },
    {
      title: "Tailwind CSS",
      logo: "",
      desc: "Tailwind CSS is a utility-first CSS framework for creating custom designs quickly. It provides low-level utility classes to build responsive and flexible user interfaces.",
    },
    {
      title: "HTML & CSS",
      logo: "",
      desc: "HTML structures web content, defining elements like headings, paragraphs, and links whereas, CSS styles this content, controlling layout, colors, and fonts. Together, they create visually appealing and organized web pages​",
    },
  ];
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
              initial={{ y: pos, x: "-50%" }}
              animate={{ y: pos + `rem` }}
              className="window rounded-lg absolute left-[48%] w-[20rem] h-[18rem] overflow-hidden">
              <motion.div
                animate={{ y: -pos + `rem` }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                className="rounded-lg w-full h-full bg-sky-100"></motion.div>
              <motion.div
                animate={{ y: -pos + `rem` }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                className="rounded-lg w-full h-full bg-sky-200"></motion.div>
              <motion.div
                animate={{ y: -pos + `rem` }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                className="rounded-lg w-full h-full bg-sky-100"></motion.div>
              <motion.div
                animate={{ y: -pos + `rem` }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                className="rounded-lg w-full h-full bg-sky-100"></motion.div>
              <motion.div
                animate={{ y: -pos + `rem` }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                className="rounded-lg w-full h-full bg-sky-100"></motion.div>
              <motion.div
                animate={{ y: -pos + `rem` }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                className="rounded-lg w-full h-full bg-sky-100"></motion.div>
              <motion.div
                animate={{ y: -pos + `rem` }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                className="rounded-lg w-full h-full bg-sky-100"></motion.div>
              <motion.div
                animate={{ y: -pos + `rem` }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                className="rounded-lg w-full h-full bg-sky-100"></motion.div>
              <motion.div
                animate={{ y: -pos + `rem` }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                className="rounded-lg w-full h-full bg-sky-100"></motion.div>
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