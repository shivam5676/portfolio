import gitIcon from "./images/github.png";
import linkedIcon from "./images/linkedin.png";
import emailIcon from "./images/mail.png";
const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 ">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
         
          <li className="nav-item">
            <a href="https://github.com/shivam5676" className="nav-link px-2 text-body-secondary">
              <img src={gitIcon} height={"30px"} alt="git icon"></img>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/shivam-singh-rajawat/" className="nav-link px-2 text-body-secondary">
            <img src={linkedIcon} height={"30px"} alt="linkedin icon"></img>
            </a>
          </li>
          
          <li className="nav-item">
            <a href="mailto:shivam.handler@gmail.com" className="nav-link px-2 text-body-secondary">
            <img src={emailIcon} height={"30px"} alt="email icon"></img>
            </a>
          </li>
        </ul>
        <p className="text-center text-white fw-bolder ">
          <span className="text-info"> M</span>ade{" "}
          <span className="text-info">W</span>ith <span className="animate__animated animate__heartBeat animate__infinite" style={{display: "inline-block"}}>💖</span> &{" "}
          <span className="text-info">D</span>ark{" "}
          <span className="text-info">T</span>heme 😅{" "}<span className="fw-normal text-center text-white ps-5">copyright © 2024</span>
        </p>
        
      </footer>
    </div>
  );
};
export default Footer;
