import React, { useState, useEffect } from "react";

const Header = () => {
  const [changeHeader, setChangeHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeHeaderColor = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderColor);

    return () => {
      window.removeEventListener("scroll", changeHeaderColor);
    };
  }, []);

  return (
    <header
      className={`header ${changeHeader ? "scroll-header" : ""}`}
      style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
      id="header"
    >
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <img
            src="./media/3.png"
            alt="Rupasinghe Steels Logo"
            className="logo-image"
            style={{ width: "100px" }}
          />
          <span> » Rupasinghe Steels ™</span>
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className={`nav__list ${menuOpen ? "active" : ""}`}>
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#special" className="nav__link active-link">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#products" className="nav__link">
                Products
              </a>
            </li>
            <li className="nav__item">
              <a href="#place" className="nav__link">
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#blog" className="nav__link">
                About Us
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <i className="bx bx-x"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
