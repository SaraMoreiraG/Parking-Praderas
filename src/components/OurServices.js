import React from "react";
import { scrollToSection } from "../utils/scrollToSection";

const OurServices = () => {
  return (
    <section id="services">
      <div className="row text-center mx-0 mb-4">
        <h2>Nuestros Servicios</h2>
      </div>
      <div className="row g-3">
        <div className="d-flex align-items-stretch col-lg-4 col-md-6">
          <div className="service-card big">
            <div>
              <h3>Duchas</h3>
              <p>
                Después de largas horas en la carretera, disfruta de un merecido
                descanso con nuestras duchas siempre limpias, además de aseos
                perfectamente equipados para ofrecerte la máxima comodidad.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-card small mb-2">
            <h3>Zona de lavado</h3>
            <p>
              Mantén tu camión o autocaravana impecable en nuestra completa zona
              de lavado, equipada con todo lo necesario para que tu vehículo
              esté siempre en perfectas condiciones.
            </p>
          </div>
          <div className="service-card medium map">
            <h3>Acceso excelente</h3>
            <p>
              Llegar a nuestro parking nunca ha sido tan fácil, gracias a
              nuestro acceso inmejorable que te permite maniobrar con comodidad
              y rapidez, sin complicaciones.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="service-card medium camera mb-2">
            <h3>Cámaras de vigilancia</h3>
            <p>
              Tu tranquilidad es nuestra prioridad; nuestras cámaras de
              vigilancia 24/7 aseguran que tu vehículo y tus pertenencias estén
              siempre protegidos.
            </p>
          </div>
          <div className="service-card small">
            <h3>Próximamente: Almacenes</h3>
            <p>
              ¡Muy pronto! Disfruta de la comodidad y seguridad de nuestros
              almacenes, con espacios que varían entre 2 y 150 metros cuadrados,
              especialmente diseñados para cubrir todas tus necesidades de
              almacenamiento y logística.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center my-5">
        <div
          className="btn-purple col-lg-3 col-md-4 col-sm-4 col-8"
          onClick={() => scrollToSection("map")}
        >
          Reserva ahora!
        </div>
      </div>
    </section>
  );
};

export default OurServices;
