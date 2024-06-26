import React from "react";
import logo from "../images/logo192.png";

function AboutUs() {
  return (
    <section id="about-us">
      <div className="row text-center mx-0 mb-2">
        <h2>Sobre nosotros</h2>
      </div>
      <div className="row">
        <div className="col-5 text-end">
        <img src={logo} alt="logo parking las praderas"/>
        </div>
        <div className="col-lg-5">
          <p>
            En Parking Las Praderas, nos dedicamos a proporcionar un espacio
            seguro, cómodo y accesible para camioneros, autocaravanistas y
            profesionales de la logística. Con instalaciones modernas y
            servicios pensados para facilitar tu día a día, nuestro objetivo es
            ofrecerte un lugar donde puedas descansar, mantener tu vehículo en
            óptimas condiciones y sentirte tranquilo sabiendo que contamos con
            vigilancia las 24 horas. Somos tu aliado en la carretera,
            comprometidos con la calidad y la satisfacción de cada uno de
            nuestros clientes.
          </p>
          <div className="d-flex align-items-center">
            <i className="fa-regular fa-envelope me-2"></i>
            <p className="m-0">parkinglaspraderas@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
