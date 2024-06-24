import React from "react";
import Spline from "@splinetool/react-spline";
import { MdFileDownload } from "react-icons/md";
import Button from "./Button";
import { FaAngleRight } from "react-icons/fa";

export default function Hero({ imgURL, vid }) {
  return (
    <div className="h-screen w-full ">
      <video
        className="h-full w-full object-cover"
        loop
        muted
        autoPlay="autoplay">
        <source src={vid} />
      </video>
      <div
        style={{
          backgroundImage:
            " linear-gradient(to top, #000 40%, #000 30%, #000 10%, transparent)",
        }}
        className="absolute top-52 sm:top-10 w-full sm:h-full bg-blend-darken flex items-center justify-center gap-40">
        <div className="mx-5 flex sm:flex-row flex-col-reverse -mt-24 sm:mt-0 items-center justify-center gap-2 sm:gap-16 md:gap-32 lg:gap-40">
          <div
            style={{ fontFamily: "JetBrains Mono" }}
            className="hero-left max-w-96 tracking-wide">
            <h1 className="text-3xl lg:text-6xl mb-3 mt-16">Hello I'm</h1>
            <h1
              style={{
                color: "#c33cb7",
                background: "-webkit-linear-gradient(left, #c33cb7, #ef6e2e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-5xl lg:text-6xl">
              Shuchit Singh
            </h1>
            <p className="mt-7  mb-10 text-sm lg:text-base text-wrap">
              <span
                style={{
                  color: "#c33cb7",
                  background: "-webkit-linear-gradient(left, #c33cb7, #ef6e2e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                I am a developer
              </span>{" "}
              driven with a passion for crafting exceptional{" "}
              <span
                style={{
                  color: "#c33cb7",
                  background: "-webkit-linear-gradient(left, #c33cb7, #ef6e2e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                web experiences{" "}
              </span>
              and exploring the frontiers of
              <span
                style={{
                  color: "#c33cb7",
                  background: "-webkit-linear-gradient(left, #c33cb7, #ef6e2e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                {" "}
                machine learning.
              </span>
            </p>

            <div className="mt-4 w-3/4 h-fit">
              <a download={"shuchit-resume"} href="../public/files/resume.pdf">
                <Button
                  className="w-3"
                  properties={{
                    title: "Download Resume",
                    icon: <MdFileDownload />,
                    pad: "8px",
                  }}></Button>
              </a>
            </div>
          </div>
          <div className="-mb-10 -mt-5 sm:mb-0 sm:mt-0">
            <div
              style={{ boxShadow: "0 0 0.95em #c33cb7" }}
              class="lg:h-[327px] lg:w-[327px] md:w-[258px] md:h-[258px]  rounded-full bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 p-1 flex items-center justify-center">
              <img
                className="rounded-full h-52 w-52 md:h-64 md:w-64 lg:h-80 lg:w-80 object-cover"
                src={imgURL}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
