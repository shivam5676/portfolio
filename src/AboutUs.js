import boyIcon from "./images/—Pngtree—chinese dragon spring festival traditional_13712207.png";
import charIcon from "./images/3character.png";

import AboutUscss from "./aboutus.module.css";
const AboutUs = () => {
  return (
    <div className="container text-center g-5 py-5 mb-5">
      <div className="row row-cols-1 ">
        <div className={`col border rounded border-info ${AboutUscss.btn}`}>
          <div className="row row-cols-md-2 row-cols-1">
            <div className="col-md-4 col-12 ">
              <img
                className="img-fluid pt-3"
                src={boyIcon}
                style={{ height: "300px" }}
              />
            </div>
            <div className="col-md-8 col-12">
              <div className="row row-cols-1">
                <div className="col d-flex justify-content-center pe-md-5 pt-5">
                  <h2 className="text-warning">
                    <span className="text-info">A</span>bout{" "}
                    <span className="text-info">M</span>e
                  </h2>
                </div>
                <div className="col d-flex justify-content-left my-5 text-md-start text-left ">
                  <p className="px-5 text-warning fw-semibold">
                    My name is Shivam Singh, and I'm from{" "}
                    <span className="text-info">Uttar Pradesh's Kanpur</span>.I
                    hold a B.Sc. (P.C.M.) degree.My passion for Tech related things and my
                    love for technology inspired me to pursue a career in web
                    development.
                    <p>
                      I'm a <span className="text-info">trainee </span> at{" "}
                      <span className="text-info">Sharpener </span>
                      for the past year, where I've learned{" "}
                      <span className="text-info">web programming basics </span>
                      as well as{" "}
                      <span className="text-info">advanced techniques</span>,
                      and I've picked up a lot of
                      <span className="text-info"> front-end </span> and{" "}
                      <span className="text-info">back-end abilities</span>.
                    </p>{" "}
                    I enjoy travelling, playing video games, watching movies,
                    and listening to music in addition to coding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 pt-3 ">
        <div className={`col border rounded border-info ${AboutUscss.btn}`}>
          <div className="row row-cols-md-2 row-cols-1">
            <div className="col-md-4 col-12 order-md-2 order-1  d-flex align-items-center justify-content-center">
              <img
                className="img-fluid pt-3 px-3"
                src={charIcon}
                style={{ height: "300px" }}
              />
            </div>
            <div className="col-md-8 col-12 order-3 order-md-1 ">
              <div className="row row-cols-1">
                <div className="col d-flex justify-content-center pe-md-5 pt-5 ">
                  <h2 className="text-warning">
                    <span className="text-info">T</span>raining{" "}
                    <span className="text-info">& </span>
                    <span className="text-info">C</span>ertificate
                  </h2>
                </div>
                <div className="col  my-5 text-md-start text-left ">
                  <div className="d-flex justify-content-left m-2">
                    {" "}
                    <h4 className="text-info ps-2">
                      <span className="text-white">S</span>harpener{" "}
                      <span className="text-white">.tech</span>
                    </h4>
                    <span className="ps-3 text-warning">
                       Dec 2022 - JUNE 2023 
                    </span>
                  </div>

                  <div className="d-flex justify-content-left ">
                    <h5 className="ps-3 text-warning">banglore , India</h5>
                    <span className="d-flex badge text-bg-danger ms-3 align-items-center">
                      training
                    </span>
                  </div>
                  <p className="px-2 pt-3 mt-2 text-white">
                    I learned all there is to know about coding from scratch
                    when I came to SharpenerTech.DSA, Basic and complex
                    JavaScript, React Frontend Skill, Node.js and Express.js
                    with Mongo and SQL databases, along with a tonne of other
                    jobs like deployment and a few other complex topics, are all
                    things I completed.
                  </p>
                </div>
                {/* <hr className="featurette-divider text-white ms-2 mx-2 " /> */}
              </div>
              <div className="row row-cols-1">
                <div className="col  my-5 text-md-start text-left ">
                  <div className="d-flex justify-content-left mx-1">
                    {" "}
                    <h4 className="text-info ps-2">
                      <span className="text-white">F</span>ree
                      <span className="text-white">C</span>odecamp
                      <span className="text-white">.org</span>
                    </h4>
                    <span className="ps-3 text-danger"> JUNE 2024</span>
                  </div>

                  <div className="d-flex justify-content-left ">
                    <h5 className="ps-3 text-danger">online</h5>
                    <span className="d-flex badge text-bg-warning ms-3 align-items-center">
                      certificate
                    </span>
                  </div>
                  <p className="px-2 pt-3 mt-2 text-white">
                  I designed five tiny apps here, practiced with MongoDB, and received my certificate for backend api.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
