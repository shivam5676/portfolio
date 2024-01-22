import reactIcon from "./images/reactIcon.png";
import cssIcon from "./images/css-3.png";
import htmlIcon from "./images/html-5.png";
import bootstrapIcon from "./images/bootstrap.png";
import sqlIcon from "./images/sql.png";
import mongoIcon from "./images/database.png";
import azureIcon from "./images/azure.png";
import awsIcon from "./images/logo.png";
import jsIcon from "./images/java-script.png";
import firebaseIcon from "./images/pngwing.com.png";
import expressIcon from "./images/express.png";
import axiosIcon from "./images/axios.png";
import gitIcon from "./images/github.png";
import javaIcon from "./images/java.png";
import RouterIcon from "./images/react-router.svg";
import ReduxIcon from "./images/react-redux-221761.png";
import jwtIcon from "./images/icons8-json-web-token-240.png";
import razorpayIcon from "./images/razorpay.png"
import skillcss from "./skills.module.css";

const Skills = () => {
  return (
    <div className={`container ${skillcss.block} py-2 `}>
      <div className={`${skillcss.bgImg} px-1`}>
        <p className="text-center p-2">
          <div
            className="container bg bg-warning position-relative rounded-pill text-bold text-center p-2"
            style={{ width: "150px", fontWeight: "bolder" }}
          >
            SKILLS
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-1 ">
              17+
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
          {/* </span> */}
        </p>
        <div
          className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 mx-md-3 "
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={reactIcon} className="img-fluid m-md-3 m-2" alt="skill icon"></img>

              <p className="card-text text-center">REACT JS </p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={cssIcon} className="img-fluid m-md-3 m-2" alt="skill icon"></img>

              <p className="card-text text-center">CSS 3 </p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={htmlIcon} className="img-fluid m-md-3 m-2 " alt="skill icon"></img>

              <p className="card-text text-center">HTML 5 </p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={bootstrapIcon} className="img-fluid m-md-3 m-2" alt="skill icon"></img>

              <p className="card-text text-center">BOOTSTRAP </p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={mongoIcon} className="img-fluid m-md-3 m-2" alt="skill icon"></img>

              <p className="card-text text-center">MONGO DB </p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={awsIcon} className="img-fluid m-md-3 m-2" alt="skill icon"></img>

              <p className="card-text text-center">AWS</p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={sqlIcon} className="img-fluid m-md-3 m-2" alt="skill icon"></img>

              <p className="card-text text-center">SQL DB </p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={azureIcon} className="img-fluid m-md-3 m-2" alt="skill icon"></img>

              <p className="card-text text-center">AZURE</p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={razorpayIcon} className="img-fluid m-md-3 m-2" alt="skill icon"></img>

              <p className="card-text text-center">RAZORPAY</p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={jsIcon} className="img-fluid m-md-3 m-2" alt="skill icon"></img>

              <p className="card-text text-center">JAVASCRIPT</p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={firebaseIcon} className="img-fluid m-md-3 m-2" alt="skill icon"></img>

              <p className="card-text text-center">FIREBASE</p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={expressIcon} className="img-fluid m-md-3 m-2" alt="skill icon"></img>

              <p className="card-text text-center">EXPRESS JS</p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={axiosIcon} className="img-fluid m-md-3 m-2" alt="skill icon"></img>

              <p className="card-text text-center">AXIOS </p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={gitIcon} className="img-fluid m-md-3 m-2" alt="skill icon"></img>

              <p className="card-text text-center">GITHUB</p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={javaIcon} className="img-fluid m-md-3 m-2" alt="skill icon"></img>

              <p className="card-text text-center">JAVA</p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={RouterIcon} className="img-fluid m-md-3 m-2" alt="skill icon"></img>

              <p className="card-text text-center">REACT ROUTER</p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={jwtIcon} className="img-fluid m-md-3 m-2" alt="skill icon"></img>

              <p className="card-text text-center">JWT</p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={ReduxIcon} className="img-fluid m-md-3 m-2" alt="skill icon"></img>

              <p className="card-text text-center">REACT REDUX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
