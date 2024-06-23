import React from "react";
import Fields from "./components/Fields";
import Home from "./components/Home";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="h-fit w-full bg-black text-white flex flex-col">
      {/* <div className=" h-screen"><Home></Home></div> */}
      {/* <div className="mt-40"><Fields></Fields></div> */}

      <div className="div">
        <Skills></Skills>
      </div>
    </div>
  );
}

export default App;
