import React, { useState } from "react";
import Button from "./Button";
import { FaAngleRight } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";



function Navbar() {
  const menu_option = [
    { name: "Home", status: true },
    { name: "Experience", status: false },
    { name: "Skills", status: false },
    {name:'',status:false}
  ];
  const [menu,setMenu]= useState(true)
  const menu_icon_change=()=>{
    setMenu(!menu)
  }
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #000000 60%,#000000 50%,#000000 40%,#000000 30%,#000000 20%,#000000 10%,transparent,)",
      }}
      className="w-full flex justify-between py-6 px-16 lg:px-20 ">
      <div className=" h-fit text-semibold">
        <h1
          style={{
            textShadow: "0 0 0.09em #c33cb7",
          }}
          className="font-semibold text-2xl tracking-wider">
          <span
            style={{
              color: "#c33cb7",
            }}>
            Sh
          </span>
          uchit.
        </h1>
      </div>
      <div className=" flex flex-col sm:flex-row items-center justify-between">
        <div
          className={`menus sm:gap-5 md:gap-8 lg:gap-16 flex flex-col sm:flex-row absolute sm:static items-center sm:bg-transparent  text-base font-regular md:tracking-wide bg-zinc-700 min-w-full min-h-[100vh]  sm:min-h-10 z-50 right-[0] pt-20 sm:pt-0 ${
            menu ? "top-[-10000%]" : "top-[0%] "
          } gap-16`}>
          {menu_option.map((item, i) => {
            return item.name.length != 0 ? (
              <div key={i} className="flex items-center justify-center gap-1.5">
                {item.status ? (
                  <span
                    style={{
                      backgroundColor: "#c33cb7",
                      boxShadow: "0 0 0.25em #c33cb7",
                    }}
                    className="inline-block h-1 w-1  rounded-full"></span>
                ) : (
                  ""
                )}
                <a key={i} href={`./${item.name}`}>
                  {item.name}
                </a>
              </div>
            ) : (
              <div className="h-fit">
                <Button
                  properties={{ title: "Get in touch", icon: <FaAngleRight /> }}
                  pad="2"></Button>
              </div>
            );
          })}
        </div>
        {menu ? (
          <button
            onClick={() => {
              menu_icon_change();
            }}>
            <CiMenuFries className="absolute text-zinc-200 text-2xl sm:hidden z-50 right-14" />
          </button>
        ) : (
          <button 
            onClick={() => {
              menu_icon_change();
            }}>
            <IoClose className="absolute text-zinc-200 text-2xl sm:hidden z-50 right-14" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
