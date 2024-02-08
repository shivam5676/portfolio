import chitchatsnap from "./images/chitchat_snap.jpg";
import fundsTrackersnap from "./images/fundstracker_snap.jpg";
import inMailsnap from "./images/inmail_snap.jpg";
import expenseTrackersnap from "./images/expense-tracker.jpg";
import indiatrip from "./images/myindiatrip.jpg";
import projectcss from "./projects.module.css";
const Projects = () => {
  return (
    <div className="container marketing">
      <hr className="featurette-divider" />
      <h2 className="pb-3 border-bottom text-center text-warning pt-4 ">
        PROJECTS
      </h2>
      <div
        className={`row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex justify-content-center `}
      >
        <div className="col mb-2 pb-2">
          <div className={`card bg-dark ${projectcss.btn}`}>
            <img
              src={indiatrip}
              className="card-img-top "
              alt="..."
              height="250px"
            />
            <div className="card-body outline-top text-white">
              <h5 className="card-title">MyIndia Trip</h5>
              <p className="card-text text-bold text-white">
                created a beautiful & dynamic  "india trip booking" fullstack web app with
                the help of react & bootstrap .intreagted
                <span className="text-info">
                  {" "}
                  razorpay for seamless cart transaction{" "}
                </span>{" "}
                for purchasing trip order . Also added order section for viewing
                all previous purchases
              </p>
            </div>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item bg-dark">
                <span className="badge rounded-pill text-bg-warning m-1">
                  react js
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  bootstrap
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  css 3
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  bcrypt
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  jwt
                </span> <span className="badge rounded-pill text-bg-warning m-1">
                  mysql
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  react redux
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  razorpay
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  express js
                </span>
               
                <span className="badge rounded-pill text-bg-warning m-1">
                  azure blob storage
                </span>
              </li>
            </ul>
            <div className="card-body row">
              <a
                href="https://github.com/shivam5676/bookingAppFrontend"
                type="button"
                className="btn btn-outline-warning col mx-2"
              >
                source code
              </a>

              <a
                href="https://www.myindiatrip.pp.ua"
                type="button"
                className="btn btn-outline-danger col mx-2 pt-3"
              >
                view work
              </a>
            </div>
          </div>
        </div>
        <div className="col mb-2 pb-2">
          <div className={`card bg-dark ${projectcss.btn}`}>
            <img
              src={chitchatsnap}
              className="card-img-top"
              alt="..."
              height="250px"
            />
            <div className="card-body outline-top text-white">
              <h5 className="card-title">ChitChat Messenger</h5>
              <p className="card-text text-bold text-white">
                I created a{" "}
                <span className="text-info">real-time messenging </span> app
                with the help of <span className="text-info"> socket io </span>
                with{" "}
                <span className="text-info">
                  0 (zero) network request{" "}
                </span>{" "}
                while sending and recieving message.I used react js and express
                js with sql db for storing messages .and i deployed this project
                on <span className="text-info"> azure Virtual Machine</span>
              </p>
            </div>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item bg-dark">
                <span className="badge rounded-pill text-bg-warning m-1">
                  react js
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  socket io
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  css 3
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  react redux
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  express js
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  mySql
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  bcrypt
                </span>
                <span className="badge rounded-pill text-bg-warning m-1"></span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  azure blob storage
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  jwt
                </span>
              </li>
            </ul>
            <div className="card-body row">
              <a
                href="https://github.com/shivam5676/groupchat-frontend"
                type="button"
                className="btn btn-outline-warning col mx-2"
              >
                source code
              </a>

              <a
                href="https://www.chitchatmessenger.pp.ua"
                type="button"
                className="btn btn-outline-danger col mx-2 pt-3"
              >
                view work
              </a>
            </div>
          </div>
        </div>

        <div className="col mb-2 pb-2">
          <div className={`card bg-dark ${projectcss.btn}`}>
            <img
              src={fundsTrackersnap}
              className="card-img-top "
              alt="..."
              height="250px"
            />
            <div className="card-body outline-top text-white">
              <h5 className="card-title">Funds Tracker</h5>
              <p className="card-text text-bold text-white">
                I created a Spends Tracking Apps with the help of react js and
                expressjs .i used mongo db and azure blob storage for handling
                expenses data and thier genertaion report and also intregated{" "}
                <span className="text-info"> Razorpay Payment Api </span> for
                premium membership.
              </p>
            </div>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item bg-dark">
                <span className="badge rounded-pill text-bg-warning m-1">
                  react js
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  graph js
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  css 3
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  bcrypt
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  jwt
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  react redux
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  razorpay
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  express js
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  mongo db
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  azure blob storage
                </span>
              </li>
            </ul>
            <div className="card-body row">
              <a
                href="https://github.com/shivam5676/fundsTrackerMongoFrontend"
                type="button"
                className="btn btn-outline-warning col mx-2"
              >
                source code
              </a>

              <a
                href="https://www.fundstracker.pp.ua"
                type="button"
                className="btn btn-outline-danger col mx-2 pt-3"
              >
                view work
              </a>
            </div>
          </div>
        </div>
        <div className="col mb-2 pb-2">
          <div className={`card bg-dark ${projectcss.btn}`}>
            <img
              src={inMailsnap}
              className="card-img-top"
              alt="..."
              height="250px"
            />
            <div className="card-body outline-top text-white">
              <h5 className="card-title">In Mail</h5>
              <p className="card-text text-bold text-white">
                Using React and Firebase, I created a mailBox client application
                that allows users to send and read emails. The mail might also
                be deleted by them.I made this app from scratch, using React
                Redux and Context Provider to handle complex states.
              </p>
            </div>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item bg-dark">
                <span className="badge rounded-pill text-bg-warning m-1">
                  react js
                </span>

                <span className="badge rounded-pill text-bg-warning m-1">
                  css 3
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  react redux
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  context provider
                </span>

                <span className="badge rounded-pill text-bg-warning m-1">
                  firebase
                </span>
              </li>
            </ul>
            <div className="card-body row">
              <a
                href="https://github.com/shivam5676/mailBoxClientApp"
                type="button"
                className="btn btn-outline-warning col mx-2 "
              >
                source code
              </a>
              <a
                href="https://mail-box-client-app.vercel.app/"
                type="button"
                className="btn btn-outline-danger col mx-2 pt-3"
              >
                view work
              </a>
            </div>
          </div>
        </div>
        <div className="col mb-2 pb-2">
          <div className={`card bg-dark ${projectcss.btn}`}>
            <img
              src={expenseTrackersnap}
              className="card-img-top"
              alt="..."
              height="250px"
            />
            <div className="card-body outline-top text-white">
              <h5 className="card-title">Expense tracker</h5>
              <p className="card-text text-bold text-white">
                Using Firebase and React, I developed an app for tracking
                expenses. It has a graph that allows users to view each expense
                in a separate column.i added an expenses filter column for
                filtering the expenses by date..
              </p>
            </div>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item bg-dark">
                <span className="badge rounded-pill text-bg-warning m-1">
                  firebase
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  react
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  css
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  react redux
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  context provider
                </span>
                <span className="badge rounded-pill text-bg-warning m-1">
                  react router dom
                </span>
              </li>
            </ul>
            <div className="card-body row">
              <a
                href="https://github.com/shivam5676/expenseTrackerLastProject"
                type="button"
                className="btn btn-outline-warning col mx-2"
              >
                source code
              </a>

              <a
                href="https://shivam-expensetracker.vercel.app/"
                type="button"
                className="btn btn-outline-danger col mx-2 pt-3"
              >
                view work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
