import React from "react";
import Fields from "./components/Fields";
import Home from "./components/Home";
import LocomotiveScroll from "locomotive-scroll";
import Introduction from "./components/Introduction"
import Skills from "./components/Skills";
import Cards from "./components/Cards"

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="h- w-full bg-black text-white flex flex-col">
      {/* <div className=" h-screen"><Home></Home></div> */}
      {/* <div className="mt-10"><Fields></Fields></div> */}
      {/* <Introduction></Introduction> */}
      {/* <div className="h-screen"><Skills></Skills></div> */}
      <Cards></Cards>

    </div>
  );
}

export default App;
