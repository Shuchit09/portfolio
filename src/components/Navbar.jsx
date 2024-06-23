import React from "react";
import Button from "./Button";
import { FaAngleRight } from "react-icons/fa";

function Navbar() {
  const menu_option = [
    { name: "Home", status: true },
    { name: "Me", status: false },
    { name: "Skills", status: false },
    { name: "", status: false },
    { name: "Experience", status: false },
  ];
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #000000 60%,#000000 50%,#000000 40%,#000000 30%,#000000 20%,#000000 10%,transparent,)",
      }}
      className="max-w-screen-2xl flex items-center justify-between py-6 px-20">
      <div className="h-fit w-28 text-semibold">
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
      <div className="menus gap-16 flex items-center bg-transparent text-base font-regular tracking-wide">
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
              <a key={i} href="">
                {item.name}
              </a>
            </div>
          ) : (
            <span
              key={i}
              className="h-5 w-[1.5px] bg-slate-400 rounded-md"></span>
          );
        })}
      </div>
      <div className="h-fit">
        <Button properties={{title:"Get in touch",icon: <FaAngleRight />}} pad="2"></Button>
      </div>
    </div>
  );
}

export default Navbar;
