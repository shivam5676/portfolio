const Footer = () => {
  return (
    <div class="container">
      <footer class="py-3 my-4 ">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>
        </ul>
        <p class="text-center text-white fw-bolder">
          <span className="text-info"> M</span>ade{" "}
          <span className="text-info">W</span>ith 💖 &{" "}
          <span className="text-info">D</span>ark{" "}
          <span className="text-info">T</span>heme 😅{" "}
        </p>
      </footer>
    </div>
  );
};
export default Footer;
