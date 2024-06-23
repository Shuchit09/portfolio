import React from "react";
import Spline from "@splinetool/react-spline";
import { MdFileDownload } from "react-icons/md";
import Button from "./Button";
import { FaAngleRight } from "react-icons/fa";

export default function Hero({ imgURL, vid }) {
  return (
    <div className="h-screen">
      <video loop muted autoPlay="autoplay">
        <source src={vid} />
      </video>
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
              web experiences </span>
            and exploring the frontiers of
            <span
              style={{
                color: "#c33cb7",
                background: "-webkit-linear-gradient(left, #c33cb7, #ef6e2e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}> machine learning.
            </span>
            I thrive on challenges that push my creativity and skills, aiming to
            build impactful solutions that{" "}
            <span
              style={{
                color: "#c33cb7",
                background: "-webkit-linear-gradient(left, #c33cb7, #ef6e2e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              inspire and innovate.
            </span>
          </p>
          <div className="mt-4 w-3/4 h-fit">
            <a download={"shuchit-resume"} href="../public/files/resume.pdf">
              <Button
                properties={{
                  title: "Download Resume",
                  icon: <MdFileDownload />,
                  pad: "8px",
                }}></Button>
            </a>
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
