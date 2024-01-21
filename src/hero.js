import heroIcon from "./images/herobgMan.png";
// import herocss from "./hero.module.css"


const Hero = () => {
  return (
    <div className={`container col-xxl-8 px-4 py-5 `}>
      <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
        <div
          className={`col-10 col-sm-8 col-lg-6 animate__animated animate__backInRight animate__slow`}
        >
          <img
            src={heroIcon}
            className="d-block mx-lg-auto img-fluid animate__animated animate__headShake animate__delay-3s"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            // loading="lazy"
          />
        </div>
        <div className={`col-lg-6  animate__animated animate__fadeIn`}>
          <h1 className="display-4 fw-bold text-info mb-4 animate__animated animate__fadeInDownBig animate__slow">
            Greetings! I'm Shivam, a Fullstack Developer{" "}
            <h1
              style={{ display: "inline-block" }}
              className="animate__animated animate__fadeOutTopRight animate__delay-3s"
            >
              🚀
            </h1>
          </h1>
          <p className="lead text-warning fw-semibold animate__animated animate__fadeInUp animate__delay-1s">
            Welcome to my coding and creative universe! My goal is to create
            remarkable web experiences, with a focus on mastering the craft of
            Fullstack development using <span className="text-info font-weight-bold">React</span> and <span className="text-info font-weight-bold">Node.js</span>.
          </p>

          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="  btn btn-outline-warning btn-lg px-4 animate__animated animate__lightSpeedInLeft animate__delay-3s"
            >
              SEE RESUME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
