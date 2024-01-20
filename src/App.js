import AboutUs from "./AboutUs";
import NavBar from "./NavBar";
import ContactUs from "./contact";
import Footer from "./footer";
import Hero from "./hero";
import OtherProjects from "./otherProjects";
import Projects from "./projects";
import Skills from "./skills";

<style>.md-mades{}</style>;

function App() {

  return (
    <div style={{backgroundColor:"black",zIndex:-1}}>
      <NavBar></NavBar>
      <Hero></Hero>
      <Skills></Skills>
      <Projects></Projects>

      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
