import React, { useState } from "react";
import logo from "../images/logo512.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  }
  return (
    <div className="nav">
      <div className="nav-title col-lg-3 col-md-4">
        <img src={logo} alt="logo parking las praderas" />
        <h1>Parkig las praderas</h1>
      </div>
      <div className="nav-menu col-lg-6 col-md-6">
        <h5 onClick={() => scrollToSection("services")}>SERVICIOS</h5>
        <h5 onClick={() => scrollToSection("map")}>PRECIOS</h5>
        <h5 onClick={() => scrollToSection("map")}>UBICACIÓN</h5>
      </div>
      <div className="nav-social col-lg-2 col-md-2">
        <i className="fa-brands fa-instagram me-3"></i>
        <i className="fa-brands fa-twitter me-3"></i>
        <i
          className="fa-solid fa-location-dot"
          onClick={() => scrollToSection("map")}
        ></i>
      </div>
      <div className="nav-collapse d-flex">
        <div>
          <i className="fa-brands fa-instagram me-3"></i>
          <i className="fa-brands fa-twitter me-3"></i>
          <i
            className="fa-solid fa-location-dot me-3"
            onClick={() => scrollToSection("map")}
          ></i>
          {menuOpen ? (
          <i className="fa-solid fa-x" onClick={() => setMenuOpen(!menuOpen)}></i>
        ) : (
          <i
            className="fa-solid fa-bars"
            onClick={() => setMenuOpen(!menuOpen)}
          ></i>
        )}
        </div>
      </div>
      {menuOpen && (
        <div className="d-flex justify-content-end text-end col-12">
          <div>
            <h5 className="nav-collapse-text" onClick={() => scrollToSection("services")}>SERVICIOS</h5>
            <hr className="nav-divider" />
            <h5 onClick={() => scrollToSection("map")}>PRECIOS</h5>
            <hr className="nav-divider" />
            <h5 onClick={() => scrollToSection("map")}>UBICACIÓN</h5>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
