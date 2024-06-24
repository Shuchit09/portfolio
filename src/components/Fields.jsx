import React from "react";
import Field from "./Field";

function Fields() {
  const data = [
    {
      serial: "01",
      title: "Obys Agency Clone",
      desc: 'Created the frontend of "Obys Agency" using techstacks: HTML, CSS, JavaScript, Locomotive JS, Shery JS and GSAP.',
    },
    {
      serial: "02",
      title: "Omnifood",
      desc: 'Designed a the frontend of an E-commerce "Omnifood" website with functioning features.',
    },
    {
      serial: "03",
      title: "Pig Game",
      desc: "Designed a fully functional game using HTML,CSS and JavaScript.",
    },

    {
      serial: "04",
      title: "Healthy Tasty Cafe",
      desc: 'Scored #1 in "WEB-a-THON" an intra-college competition designing a responsive and interactive website using advanced JavaScript library.',
    },
  ];
  return (
    <div className="flex flex-col md:items-center sm:mt-20 mt-20">
      <h1
        style={{ fontFamily: "JetBrains Mono" }}
        className="m-10 text-[74px] lg:text-[96px] font-bold mb-5 ">
        Experience
      </h1>
      <div className="w-full border-b-[1px] bg-zinc-200"></div>
      <div className="w-full px-16 md:py-16 h-full flex item-center justify-center gap-16 flex-wrap ">
        {data.map((item, i) => (
          <Field key={i} data={item}></Field>
        ))}
      </div>
    </div>
  );
}

export default Fields;
