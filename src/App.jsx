import React from "react";
import Fields from "./components/Fields";
import Home from "./components/Home";
import LocomotiveScroll from "locomotive-scroll";
import Introduction from "./components/Introduction"
import Skills from "./components/Skills";
import Cards from "./components/Cards"
import Footer from "./components/Footer";
import sme from '../public/videos/rocket.mp4'

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="h-full w-full bg-black text-white flex flex-col overflow-y-hidden">
      <div className=" h-screen">
        <Home vid={"../public/videos/rocket.mp4"}></Home>
      </div>
      <div className="mt-5">
        <Fields></Fields>
      </div>
      {/* <Introduction></Introduction> */}
      <div className="">
        <Skills></Skills>
      </div>
      <div className="h-screen">
        <Cards></Cards>
      </div>
      <div className="-mt-10 mb-7">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
