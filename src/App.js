import AboutUs from "./AboutUs";
import NavBar from "./NavBar";
import ContactUs from "./contact";
import Footer from "./footer";
import Hero from "./hero";

import Projects from "./projects";
import Skills from "./skills";
import "./index.css";
import { useRef } from "react";


function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const myobj = {
    contact: contactRef,
    about: aboutRef,
    portfolio: projectsRef,
    home: homeRef,
    skills:skillRef
  };
  console.log(myobj);

  return (
    <div className="bgss" style={{ backgroundColor: "black", zIndex: -1}}>
      <NavBar scrollElement={myobj}></NavBar>
      <div ref={homeRef}><Hero></Hero></div>
      <div ref={aboutRef}>
        <AboutUs></AboutUs>
      </div>
      <div ref={skillRef}><Skills></Skills></div>
      <div ref={projectsRef}><Projects></Projects></div>
      <div ref={contactRef}>
        <ContactUs></ContactUs>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
