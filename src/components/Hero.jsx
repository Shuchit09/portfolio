import React from "react";
import Spline from "@splinetool/react-spline";
import { MdFileDownload } from "react-icons/md";
import Button from "./Button";

import { FaAngleRight } from "react-icons/fa";

export default function Hero({ imgURL }) {
  return (
    <div className="">
      {/* <Spline
        className="absolute"
        scene="https://prod.spline.design/kWQuDTzlbCZ8bGqQ/scene.splinecode"
      /> */}
      <Spline
        className="absolute"
        scene="https://prod.spline.design/hYuw2Zoraacf8DpI/scene.splinecode"
      />
      <div
        style={{
          backgroundImage:
            " linear-gradient(to top, #000 40%, #000 30%, #000 10%, transparent)",
        }}
        className="absolute top-10 w-full h-screen bg-blend-darken flex items-center justify-center gap-40">
        <div
          style={{ fontFamily: "JetBrains Mono" }}
          className="hero-left max-w-96 tracking-wide">
          <h1 className="text-6xl mb-3 ">Hello I'm</h1>
          <h1
            style={{
              color: "#c33cb7",
              background: "-webkit-linear-gradient(left, #c33cb7, #ef6e2e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-6xl">
            Shuchit Singh
          </h1>
          <p className="mt-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            corrupti maxime exercitationem optio doloremque aliquid reiciendis
            odio incidunt, enim eum.
          </p>
          <div className="mt-4 w-3/4 h-fit">
            <Button
              properties={{
                title: "Download Resume",
                icon: <MdFileDownload />,
                pad: "8px",
              }}></Button>
          </div>
        </div>
        <div className="">
          <div
            style={{ boxShadow: "0 0 0.95em #c33cb7" }}
            class="h-[327px] w-[327px] rounded-full bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 p-1 flex items-center justify-center">
            <img
              className="rounded-full h-80 w-80 object-cover"
              src={imgURL}
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
