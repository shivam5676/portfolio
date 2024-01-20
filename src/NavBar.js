const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-bg-info fixed-top ">
      <div className="container">
        <a className="navbar-brand" href="/title">
          Navbar
        </a>
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
            <a className="nav-link active text-white" aria-current="page" href="/home">
              Home
            </a>
            <a className="nav-link text-white" href="/aboutus">
              About me
            </a>
            <a className="nav-link text-white" href="/portfolio">
              Projects
            </a>
            <a className="nav-link text-white" href="/portfolio">
              skills
            </a>
            <a className="nav-link text-white" href="/resume">
              Resume
            </a>
            <div className="card text-center" style={{ width: "8rem" }}>
              <a className="nav-link" href="/resume">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
