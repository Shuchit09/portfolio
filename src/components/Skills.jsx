import React from 'react'
import Skill from './Skill'

function Skills() {
  var skills = [
    {
      title: "React JS",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis eaque ea debitis rerum ipsa quia saepe laudantium excepturi adipisci?",
    },
    {
      title: "GSAP",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis eaque ea debitis rerum ipsa quia saepe laudantium excepturi adipisci?",
    },
    {
      title: "Shery JS",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis eaque ea debitis rerum ipsa quia saepe laudantium excepturi adipisci?",
    },
    {
      title: "Framer Motion",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis eaque ea debitis rerum ipsa quia saepe laudantium excepturi adipisci?",
    },
    {
      title: "Locomotive JS",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis eaque ea debitis rerum ipsa quia saepe laudantium excepturi adipisci?",
    },
    {
      title: "Material UI",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis eaque ea debitis rerum ipsa quia saepe laudantium excepturi adipisci?",
    },
    {
      title: "JavaScript",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis eaque ea debitis rerum ipsa quia saepe laudantium excepturi adipisci?",
    },
    {
      title: "Tailwind CSS",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis eaque ea debitis rerum ipsa quia saepe laudantium excepturi adipisci?",
    },
    {
      title: "HTML & CSS",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis eaque ea debitis rerum ipsa quia saepe laudantium excepturi adipisci?",
    },
  ];
  return (
    <div>
      {skills.map((item,i)=><Skill data={item}></Skill>)}
      
    </div>
  )
}

export default Skills