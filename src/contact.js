import linkedIcon from "./images/linkedin.png";
import emailIcon from "./images/mail.png";
import callIcon from "./images/telephone.png";
// import linkedIcon from "./images/linkedin.png";

const ContactUs = () => {
  return (
    <div class="container px-4 pt-3">
      <h2 class="pb-3 border-bottom text-center text-warning"><span className="text-info">H</span>ire{" "}
                    <span className="text-info">M</span>e</h2>

      <div class="row row-cols-1 row-cols-md-2 align-items-center  g-5 py-5 mx-3">
        <div
          class="col d-flex flex-column align-items-center justify-content-center  gap-2 py-2 pt-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 5px 3px yellow",
          }}
        >
          <form class="form-floating col-10 ms-3">
            <input
              type="name"
              class="form-control "
              id="floatingInputValue"
              placeholder=""
            />
            <label for="floatingInputValue">Name</label>
          </form>
          <form class="form-floating col-10 ms-3 ">
            <input
              type="email"
              class="form-control "
              id="floatingInputValue"
              placeholder=""
            />
            <label for="floatingInputValue">Email</label>
          </form>
          <form class="form-floating col-10 ms-3">
            <input
              type="email"
              class="form-control "
              id="floatingInputValue"
              placeholder=""
              style={{ height: "150px" }}
            />
            <label for="floatingInputValue">message</label>
          </form>

          <a href="#" class="btn btn-primary btn-lg-lg btn-sm-sm ms-3 ms-md-5">
            send message
          </a>
        </div>

        <div class="col">
          <div class="row row-cols-1 row-cols-lg-2 g-4">
            <div class="col d-flex flex-column gap-2 align-items-center">
              <img
                class="img-fluid"
                width="100px"
                height="100px"
                src={emailIcon}
              ></img>

              <p class="fw-semibold mb-0  ms-2 text-white">shivam.handler@gmail.com</p>
            </div>
           
            <div class="col d-flex flex-column gap-2 align-items-center justify-content-center">
              <img
                class="img-fluid"
                width="100px"
                height="100px"
                src={callIcon}
              ></img>

              <p className="fw-semibold mb-0  text-white">+91 9559923286</p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
