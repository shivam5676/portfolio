import { useState } from "react";
import navIcon from "./images/shivam-portfolio-high-resolution-logo-transparent.png";
const NavBar = (props) => {
  const [activeLink, setActiveLink] = useState("home");
  const scrollComponents = props.scrollElement;
  function scrollToElement(component, link) {
    window.scrollTo({
      top: component.current.offsetTop - 20,
      behaviour: "smooth",
    });
    console.log(link);
    setActiveLink(link);
  }
  console.log(activeLink);
  return (
    <nav className="navbar navbar-expand-lg text-bg-info fixed-top ">
      <div className="container">
        <h4 className="fw-bolder">
          <h2 style={{ display: "inline-block" }} className="text-white ">
            D
          </h2>
          eveloper{" "}
          <h2 style={{ display: "inline-block" }} className="text-white">
            S
          </h2>
          hivam
        </h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a
              className={`btn nav-link active fw-bold ${
                activeLink == "home" ? " text-dark " : " text-white "
              }`}
              aria-current="home"
              onClick={() => scrollToElement(scrollComponents.home, "home")}
            >
              Home
            </a>
            <a
              className={`btn nav-link active fw-bold ${
                activeLink == "about" ? " text-dark " : " text-white "
              }`}
              onClick={() => scrollToElement(scrollComponents.about, "about")}
            >
              About me
            </a>
            <a
              className={`btn nav-link active fw-bold ${
                activeLink == "projects" ? " text-dark " : " text-white "
              }`}
              onClick={() =>
                scrollToElement(scrollComponents.portfolio, "projects")
              }
            >
              Projects
            </a>
            <a
              className={`btn nav-link active fw-bold ${
                activeLink == "skills" ? " text-dark " : " text-white "
              }`}
              onClick={() => scrollToElement(scrollComponents.skills, "skills")}
            >
              skills
            </a>
            <a className="btn nav-link text-white fw-bold" href="/resume">
              Resume
            </a>
            <div
              className="card text-center fw-bold"
              style={{ width: "8rem" }}
              onClick={() =>
                scrollToElement(scrollComponents.contact, "contacts")
              }
            >
              <a
                style={{ display: "inline-block" }}
                className={`nav-link btn active fw-bold bg-warning ${
                  activeLink == "contacts"
                    ? "  text-dark animate__animated animate__rubberBand animate__infinite"
                    : " text-dark"
                }`}
              >
                HIRE ME
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
