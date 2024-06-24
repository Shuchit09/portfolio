import React from "react";
import Button from "./Button";
import { FaAngleRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Form({ image }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={`h-fit mt-20 flex items-center justify-center bg-blend-darken`}>
      <div
        className={`w-full h-full  px-14 py-12 my-10 rounded-lg bg-zinc-800/85  min-w-[200px] max-w-[1000px] flex items-center justify-between`}>
        <div className="basis-3/5 flex flex-col items-start gap-32">
          <div className="content">
            <h1 className="block text-5xl text-zinc-300 mb-5">Contact Me</h1>
            <h3 className=" block text-sm text-zinc-500 font-semibold">
              Let's build together...
            </h3>
          </div>
          <div className="contacts">
            <div className="elem text-zinc-200 flex items-center gap-3 mb-5">
              <IoCall />

              <a href="tel:+919335960407">: +91-9335-960407</a>
            </div>
            <div className="elem text-zinc-200 flex items-center gap-3">
              <IoMdMail />

              <a href="mailto:shuchit.official@gmail.com">
                : shuchit.official@gmail.com
              </a>
            </div>
          </div>

          <div className="socials flex items-center gap-5 text-xl">
            <a href="https://github.com/Shuchit09">
              <FaGithub></FaGithub>
            </a>
            <a href="http://linkedin.com/in/shuchit-singh">
              <FaLinkedin></FaLinkedin>
            </a>
            <a href="#">
              <FaSquareXTwitter></FaSquareXTwitter>
            </a>
          </div>
        </div>
        <div className="basis-2/5">
          <form
            onSubmit={(det) => {
              console.log(det);
              Email.send({
                Host: "smtp.elasticemail.com",
                Username: "username",
                Password: "password",
                To: "shuchit.strk.89@gmail.com",
                From: "you@isp.com",
                Subject: "This is the subject",
                Body: "And this is the body",
              }).then((message) => alert(message));
            }}
            style={{ fontFamily: "Roboto" }}
            action=""
            className="flex flex-col items-end justify-end  gap-3 ">
            <div className="w-full gap-2">
              <p className="mb-3">Your Name</p>
              <input
                className="w-full p-2 rounded-lg text-zinc-800 outline-none"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="w-full mt-3">
              <p className="mb-3">Email Address</p>
              <input
                className="w-full p-2 rounded-lg text-zinc-800 outline-none"
                type="email"
                placeholder="E-mail Address"
              />
            </div>
            <div className="w-full mt-3">
              <p className="mb-3">Message</p>
              <textarea
                className="w-full p-2 rounded-lg text-zinc-800 outline-none"
                name="message"
                cols="40"
                rows="5"
                placeholder="Message"></textarea>
            </div>

            <button type="submit">
              <Button
                properties={{ title: "Submit", icon: <FaAngleRight /> }}
                custom="rounded-full py-2 px-3 bg-transparent border-[1px] border-zinc-100 w-36 flex items-center justify-center mt-3"></Button>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
