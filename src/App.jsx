import React from "react";
import Fields from "./components/Fields";
import Home from "./components/Home";
import LocomotiveScroll from "locomotive-scroll";
import Skills from "./components/Skills";
import Cards from "./components/Cards"
import Footer from "./components/Footer";
import Form from './components/Form'
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  var skills = [
    {
      title: "React JS",
      logo: "../public/images/logos/react_logo.png",
      desc: "React is a JavaScript library for building user interfaces (UIs) on the web. It follows a declarative, component-based approach and optimizes rendering performance using the Virtual DOM.",
    },
    {
      title: "GSAP",
      logo: "../public/images/logos/gsap_logo.png",
      desc: "GSAP (GreenSock Animation Platform) is a robust JavaScript library for creating high-performance, smooth animations and transitions on the web, widely used for its ease of use and extensive functionality.",
    },
    {
      title: "Framer Motion",
      logo: "../public/images/logos/framer_motion_logo.png",
      desc: "Framer Motion is a popular React library for creating smooth, declarative animations. It offers powerful tools for gesture-based interactions, layout transitions, and animations, enhancing user experience with minimal code.",
    },
    {
      title: "Material UI",
      logo: "../public/images/logos/material_ui_logo.png",
      desc: "Material UI is a popular React component library that implements Google's Material Design. It offers pre-designed, customizable components that simplify building responsive, attractive user interfaces with minimal effort. It enhances development speed and UI consistency​.",
    },
    {
      title: "JavaScript",
      logo: "../public/images/logos/javascript_logo.png",
      desc: "JavaScript is a versatile, high-level programming language primarily used for creating dynamic web pages. It enables interactive content, server-side development, and is integral to web technologies alongside HTML and CSS.",
    },
    {
      title: "Tailwind CSS",
      logo: "../public/images/logos/tailwind_logo.png",
      desc: "Tailwind CSS is a utility-first CSS framework for creating custom designs quickly. It provides low-level utility classes to build responsive and flexible user interfaces.",
    },
    {
      title: "HTML & CSS",
      logo: "../public/images/logos/html_css_logo.png",
      desc: "HTML structures web content, defining elements like headings, paragraphs, and links whereas, CSS styles this content, controlling layout, colors, and fonts. Together, they create visually appealing and organized web pages​",
    },
  ];

  
  return (
    <div className="h-full w-full bg-black text-white flex flex-col overflow-y-hidden">
      <div className=" h-screen">
        <Home vid={"../public/videos/rocket.mp4"}></Home>
      </div>
      <div className="mt-5">
        <Fields></Fields>
      </div>
      <div className="">
        <Skills skills={skills}></Skills>
      </div>
      <div className="h-screen">
        <Cards></Cards>
      </div>

      <Form image={"../public/images/bg2.jpg"}></Form>
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
