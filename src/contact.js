
import emailIcon from "./images/mail.png";
import callIcon from "./images/telephone.png";

const ContactUs = () => {
  return (
    <div className="container px-4 pt-3">
      <h2 className="pb-3 border-bottom text-center text-warning">
        <span className="text-info">H</span>ire{" "}
        <span className="text-info">M</span>e
      </h2>

      <div className="row row-cols-1 row-cols-md-2 align-items-center  g-5 py-5 mx-3">
        <div
          className="col d-flex flex-column align-items-center justify-content-center  gap-2 py-2 pt-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 5px 3px yellow",
          }}
        >
          <form className="form-floating col-10 ms-3">
            <input
              type="name"
              className="form-control "
              id="floatingInputValue"
              placeholder=""
            />
            <label for="floatingInputValue">Name</label>
          </form>
          <form className="form-floating col-10 ms-3 ">
            <input
              type="email"
              className="form-control "
              id="floatingInputValue"
              placeholder=""
            />
            <label for="floatingInputValue">Email</label>
          </form>
          <form className="form-floating col-10 ms-3">
            <input
              type="email"
              className="form-control "
              id="floatingInputValue"
              placeholder=""
              style={{ height: "150px" }}
            />
            <label for="floatingInputValue">message</label>
          </form>

          <a
            onClick={() =>
              alert(
                "this method is not working yet plz try different source of contacting"
              )
            }
            className="btn btn-primary btn-lg-lg btn-sm-sm ms-3 ms-md-5"
          >
            send message
          </a>
        </div>

        <div className="col">
          <div className="row row-cols-1 row-cols-lg-2 g-4">
            <div className="col d-flex flex-column gap-2 align-items-center">
              <img
                className="img-fluid"
                width="100px"
                height="100px"
                src={emailIcon}
                alt="email icon"
              ></img>

              <p className="fw-semibold mb-0  ms-2 text-white">
                shivam.handler@gmail.com
              </p>
            </div>

            <div className="col d-flex flex-column gap-2 align-items-center justify-content-center">
              <img
                className="img-fluid"
                width="100px"
                height="100px"
                src={callIcon}
                alt="call icon"
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
