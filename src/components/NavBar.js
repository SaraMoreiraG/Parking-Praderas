import React, { useState, useRef, useEffect } from "react";
import logo from "../images/logo512.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      // Establecer la altura máxima del menú
      menuRef.current.style.maxHeight = `${menuRef.current.scrollHeight}px`;
    } else {
      // Restaurar la altura máxima a 0
      menuRef.current.style.maxHeight = "0";
    }
  }, [menuOpen]);

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
      <div className="nav-menu col-md-4">
        <h5 onClick={() => scrollToSection("services")}>SERVICIOS</h5>
        <h5 onClick={() => scrollToSection("map")}>RESERVA AHORA</h5>
      </div>
      <div className="nav-social col-md-4">
        <div className="d-flex">
          <i className="fa-solid fa-phone me-3"></i>
          <i className="me-3">(+34) 681 974 256</i>
        </div>
        <i className="fa-brands fa-instagram me-3"></i>
        <i className="fa-brands fa-twitter me-3"></i>
        <i
          className="fa-solid fa-location-dot"
          onClick={() => scrollToSection("map")}
        ></i>
      </div>
      <div className="nav-collapse">
        <i className="fa-brands fa-instagram me-3"></i>
        <i className="fa-brands fa-twitter me-3"></i>
        <i
          className="fa-solid fa-location-dot me-3"
          onClick={() => scrollToSection("map")}
        ></i>
        <i
          className={menuOpen ? "fa-solid fa-x" : "fa-solid fa-bars"}
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>
      </div>
      <div
        ref={menuRef}
        className="nav-menu-small-wrap d-flex justify-content-end text-end col-12"
      >
        <div className="nav-menu-small">
          <h5
            className="nav-collapse-text"
            onClick={() => scrollToSection("services")}
          >
            SERVICIOS
          </h5>
          <hr className="nav-divider" />
          <h5 onClick={() => scrollToSection("map")}>RESERVAS</h5>
          <hr className="nav-divider" />
          <div className="d-flex align-items-center pb-3">
            <p className="m-0 me-2">parkinglaspraderas@gmail.com</p>
            <i className="fa-regular fa-envelope"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
