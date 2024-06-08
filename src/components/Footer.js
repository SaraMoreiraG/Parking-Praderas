import React from "react";
import { scrollToSection } from "../utils/scrollToSection";

function Footer() {
  return (
    <section id="footer">
      <div className="row g-3 mx-0">
        <div className="col-sm-6">
          <h4 className="mb-4" onClick={() => scrollToSection("services")}>
            Mira nuestro servicios
          </h4>
          <h4 className="mb-4">Política de privacidad</h4>
          <h4>Pago seguro</h4>
        </div>
        <div className="col-sm-6">
          <h4 className="mb-4" onClick={() => scrollToSection("map")}>
            ¿Donde está el parking?
          </h4>
          <h4 className="mb-4" onClick={() => scrollToSection("map")}>
            Reserva en tan solo unos clicks
          </h4>
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
