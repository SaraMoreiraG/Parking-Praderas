import React from "react";
import { scrollToSection } from "../utils/scrollToSection";

function Footer() {
  return (
    <section id="footer">
      <div className="row g-3 mx-0">
        <div className="col-sm-6">
          <h5 className="mb-4" onClick={() => scrollToSection("services")}>
            Mira nuestro servicios
          </h5>
          <h5 className="mb-4">Política de privacidad</h5>
          <h5>Pago seguro</h5>
        </div>
        <div className="col-sm-6">
          <h5 className="mb-4" onClick={() => scrollToSection("map")}>
            ¿Donde está el parking?
          </h5>
          <h5 className="mb-4" onClick={() => scrollToSection("map")}>
            Reserva en tan solo unos clicks
          </h5>
          <div className="social-footer col-lg-3 col-md-12">
            <i className="fa-brands fa-instagram me-4"></i>
            <i className="fa-brands fa-twitter me-3"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
