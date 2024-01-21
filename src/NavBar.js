const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-bg-info fixed-top opacity-75">
      <div className="container">
        <a className="navbar-brand fw-bolder" href="/title">
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
            <a className="nav-link active text-white fw-bold" aria-current="page" href="/home">
              Home
            </a>
            <a className="nav-link text-white fw-bold" href="/aboutus">
              About me
            </a>
            <a className="nav-link text-white fw-bold" href="/portfolio">
              Projects
            </a>
            <a className="nav-link text-white fw-bold" href="/portfolio">
              skills
            </a>
            <a className="nav-link text-white fw-bold" href="/resume">
              Resume
            </a>
            <div className="card text-center fw-bold" style={{ width: "8rem" }}>
              <a className="nav-link btn btn-warning" href="/resume">
                HIRE ME
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
