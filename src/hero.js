import heroIcon from "./images/herobgMan.png";
// import herocss from "./hero.module.css"
const Hero = () => {
  return (
    <div className={`container col-xxl-8 px-4 py-5 `}>
      <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
        <div className={`col-10 col-sm-8 col-lg-6 animate__animated animate__fadeInRight animate__slow `}>
          <img
            src={heroIcon}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            // loading="lazy"
          />
        </div>
        <div
          className={`col-lg-6  animate__animated animate__fadeIn`}
        >
          <h1 className="display-4 fw-bold text-info mb-4 animate__animated animate__fadeInLeft animate__slow">
            Greetings! I'm Shivam, a Fullstack Developer 🚀
          </h1>
          <p className="lead text-warning">
            Step into my world of coding and creativity! I'm on a mission to
            build exceptional web experiences, specializing in the art of
            Fullstack development with React and Node.js.
          </p>
          

          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            
            <button
              type="button"
              className="  btn btn-outline-warning btn-lg px-4 "
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
