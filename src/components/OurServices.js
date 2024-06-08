import React from 'react';
import { scrollToSection } from '../utils/scrollToSection';

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-card small mb-2">
            <h3>Duchas</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="service-card medium">
            <h3>Duchas</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="service-card medium mb-2">
            <h3>Duchas</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="service-card small">
            <h3>Duchas</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center my-5">
        <div
          className="btn-purple col-lg-2 col-md-3 col-sm-4 col-6"
          onClick={() => scrollToSection("map")}
        >
          Reserva ahora!
        </div>
      </div>
    </section>
  );
};

export default OurServices;
