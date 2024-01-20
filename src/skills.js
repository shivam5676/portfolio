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
import skillcss from "./skills.module.css";

const Skills = () => {
  return (
    <div className={`container ${skillcss.block} py-2`}>
      <div className={`${skillcss.bgImg} px-1`}>
        <p className="text-center p-2">
          <div
            class="container bg bg-warning position-relative rounded-pill text-bold text-center p-2"
            style={{ width: "150px", fontWeight: "bolder" }}
          >
            SKILLS
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-1 ">
              12+
              <span class="visually-hidden">unread messages</span>
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
              <img src={reactIcon} className="img-fluid m-md-3 m-2"></img>

              <p className="card-text text-center">REACT JS </p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={cssIcon} className="img-fluid m-md-3 m-2"></img>

              <p className="card-text text-center">CSS 3 </p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={htmlIcon} className="img-fluid m-md-3 m-2"></img>

              <p className="card-text text-center">HTML 5 </p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={bootstrapIcon} className="img-fluid m-md-3 m-2"></img>

              <p className="card-text text-center">BOOTSTRAP </p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={mongoIcon} className="img-fluid m-md-3 m-2"></img>

              <p className="card-text text-center">MONGO DB </p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={awsIcon} className="img-fluid m-md-3 m-2"></img>

              <p className="card-text text-center">AWS DEPLOYEMENT </p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={sqlIcon} className="img-fluid m-md-3 m-2"></img>

              <p className="card-text text-center">SQL DB </p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={azureIcon} className="img-fluid m-md-3 m-2"></img>

              <p className="card-text text-center">AZURE DEPLOYEMENT </p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={jsIcon} className="img-fluid m-md-3 m-2"></img>

              <p className="card-text text-center">JS</p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={firebaseIcon} className="img-fluid m-md-3 m-2"></img>

              <p className="card-text text-center">FIREBASE</p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={expressIcon} className="img-fluid m-md-3 m-2"></img>

              <p className="card-text text-center">EXPRESS JS</p>
            </div>
          </div>
          <div className="col mb-3">
            <div className={` card p-md-3 p-3`} style={{ height: "95%" }}>
              <img src={axiosIcon} className="img-fluid m-md-3 m-2"></img>

              <p className="card-text text-center">AXIOS </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
