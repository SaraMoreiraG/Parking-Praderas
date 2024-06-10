import React from "react";

function AboutUs() {
  return (
    <section id="about-us">
      <div className="row text-center mx-0 mb-2">
        <h2>Sobre nosotros</h2>
      </div>
      <div className="row">
        <div className="col-5"></div>
        <div className="col-lg-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
