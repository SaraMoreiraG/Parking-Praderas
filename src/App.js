import React, { useState } from "react";

import NavBar from "./components/NavBar";

import banner from "./images/banner.jpg";
import caravana from "./images/caravana.jpg";
import autocaravana from "./images/autocaravana.jpg";
import camion from "./images/camion.jpg";
import payment from "./images/payment.png";

import "./App.css";

function App() {
  const [month, setMonth] = useState(0);
  const [vehicle, setVehicle] = useState("");

  console.log(month, vehicle);
  return (
    <div className="App">
      <NavBar />
      <section id="banner-home">
        <img
          src={banner}
          className="img-fluid p-0"
          alt="banner parking las praderas"
        />
      </section>
      <section id="services">
        <div className="row text-center mx-0 mb-4">
          <h2>Nuestros Servicios</h2>
        </div>
        <div className="row">
          <div className="col-4 d-flex align-items-stretch ">
            <div className="service-card big">
              <div>
                <h3>Duchas</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="service-card small mb-2">
              <h3>Duchas</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="service-card medium">
              <h3>Duchas</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="service-card medium mb-2">
              <h3>Duchas</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="service-card small">
              <h3>Duchas</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center my-5">
          <div className="btn-purple col-2">Reserva ahora!</div>
        </div>
      </section>
      <section id="map">
        <div className="row mt-0 pt-5">
          <div className="col-6 d-flex justify-content-end">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.6297372894505!2d-3.8253002241077914!3d40.15053067179838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41f7cb616e31a5%3A0x3b06f388314143fd!2sParking%20las%20praderas%20Illescas!5e0!3m2!1ses!2ses!4v1713542879384!5m2!1ses!2ses"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="m-0"
              title="mapa1"
            ></iframe>
          </div>
          <div className="col-6 align-items-center">
            <div className="ms-3 row">
              <div className="d-flex col-12">
                <i className="fa-solid fa-map-location-dot me-3"></i>
                <p>Carretera Toledo-Madrid Km 32</p>
              </div>
              <div className="d-flex col-12">
                <i className="fa-solid fa-phone me-3"></i>
                <p>+34 681 974 256</p>
              </div>
              <div className="d-flex col-12">
                <i className="fa-regular fa-envelope me-3"></i>
                <p>parkinglaspraderas@gmail.com</p>
              </div>
            </div>
            <div className="ms-3 row">
              <div className="d-flex col-6">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setMonth(parseInt(e.target.value))}
                >
                  <option value="0">¿Cuánto tiempo quieres quedarte?</option>
                  <option value="1">1 mes</option>
                  <option value="6">6 meses</option>
                </select>
              </div>
            </div>
            {month === 0 ? (
              <div className="d-flex col-6 text-end justify-content-end pe-3 pt-2">
                <span>1. Elige número de meses</span>
                <i className="fa-regular fa-hand-point-up ms-3"></i>
              </div>
            ) : (
              // Vehicles selection
              <div className="row mx-0 mt-3">
                <div className="col-4">
                  <div
                    className={`selection-card ${
                      vehicle === "caravana" ? "selected" : ""
                    }`}
                    onClick={() => setVehicle("caravana")}
                  >
                    <img
                      src={caravana}
                      alt="caravana"
                      className="img-fluid card-image mb-2"
                    />
                    <h5>Caravana</h5>
                    {month === 1 ? (
                      <p className="price">50€</p>
                    ) : (
                      <p className="price">300€</p>
                    )}
                  </div>
                </div>
                <div className="col-4">
                  <div
                    className={`selection-card ${
                      vehicle === "autocaravana" ? "selected" : ""
                    }`}
                    onClick={() => setVehicle("autocaravana")}
                  >
                    <img
                      src={autocaravana}
                      alt="autocaravana"
                      className="img-fluid card-image mb-2"
                    />
                    <h5>Auto caravana</h5>
                    {month === 1 ? (
                      <p className="price">50€</p>
                    ) : (
                      <p className="price">300€</p>
                    )}
                  </div>
                </div>
                <div className="col-4">
                  <div
                    className={`selection-card ${
                      vehicle === "camion" ? "selected" : ""
                    }`}
                    onClick={() => setVehicle("camion")}
                  >
                    <img
                      src={camion}
                      alt="camion"
                      className="img-fluid card-image mb-2"
                    />
                    <h5>Camión</h5>
                    {month === 1 ? (
                      <p className="price">135€</p>
                    ) : (
                      <p className="price">810€</p>
                    )}
                  </div>
                </div>
              </div>
            )}
            {month !== 0 && (vehicle === null || vehicle === "") && (
              <div className="d-flex col-12 justify-content-center pe-3 pt-2 pb-3">
                <span>2. Elige tu vehículo</span>
                <i className="fa-regular fa-hand-point-up ms-3"></i>
              </div>
            )}
            {/* LINKS TO STRIPE */}
            {month === 1 && (
              <>
                {vehicle === "caravana" ? (
                  <div className="row justify-content-center mt-2 mb-3">
                    <div className="btn-purple col-3">
                      <a
                        href="https://www.stripe.com"
                        className=" "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Reservar
                      </a>
                    </div>
                  </div>
                ) : vehicle === "autocaravana" ? (
                  <div className="row justify-content-center mt-2 mb-3">
                    <div className="btn-purple col-3">
                      <a
                        href="https://www.stripe.com"
                        className=" "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Reservar
                      </a>
                    </div>
                  </div>
                ) : vehicle === "camion" ? (
                  <div className="row justify-content-center mt-2 mb-3">
                    <div className="btn-purple col-3">
                      <a
                        href="https://www.stripe.com"
                        className=" "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Reservar
                      </a>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            )}
            {month === 6 && (
              <>
                {vehicle === "caravana" ? (
                  <div className="row justify-content-center mt-2 mb-3">
                    <div className="btn-purple col-3">
                      <a
                        href="https://www.stripe.com"
                        className=" "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Reservar
                      </a>
                    </div>
                  </div>
                ) : vehicle === "autocaravana" ? (
                  <div className="row justify-content-center mt-2 mb-3">
                    <div className="btn-purple col-3">
                      <a
                        href="https://www.stripe.com"
                        className=" "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Reservar
                      </a>
                    </div>
                  </div>
                ) : vehicle === "camion" ? (
                  <div className="row justify-content-center mt-2 mb-3">
                    <div className="btn-purple col-3">
                      <a
                        href="https://www.stripe.com"
                        className=" "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Reservar
                      </a>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
        </div>
      </section>
      <section id="social-media">
        <div className="row text-center mx-0">
          <h2>Síguenos en redes</h2>
        </div>
        <div className="row justify-content-center mx-0 mb-4">
          <div className="social-media-icons text-center col-3">
            <i className="fa-brands fa-instagram me-3"></i>
            <i class="fa-brands fa-twitter me-3"></i>
          </div>
        </div>
      </section>
      <section id="about-us">
        <div className="row text-center mx-0 mb-2">
          <h2>Sobre nosotros</h2>
        </div>
        <div className="row">
          <div className="col-5"></div>
          <div className="col-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
      <section id="secure-payment">
        <div className="row text-center mx-0">
          <h2>Pago seguro</h2>
        </div>
        <div className="row justify-content-center mx-0 mb-4">
          <div className="social-media-icons text-center col-4">
            <img src={payment} alt="secure-payment" className="img-fluid" />
          </div>
        </div>
      </section>
      <section id="footer">
        <div className="row mx-0">
          <div className="col-6">
            <h4 className="mb-4">Mira nuestro servicios</h4>
            <h4 className="mb-4">Política de privacidad</h4>
            <h4>Pago seguro</h4>
          </div>
          <div className="col-6">
            <h4 className="mb-4">¿Donde está el parking?</h4>
            <h4 className="mb-4">Reserva en tan solo unos clicks</h4>
            <div className="social-footer col-3">
              <i className="fa-brands fa-instagram me-4"></i>
              <i class="fa-brands fa-twitter me-3"></i>
            </div>
          </div>
        </div>
      </section>
      <section id="sub-footer">
        <span>
          Developed with &#10084; by{" "}
          <a
            href="www.linkedin.com/in/sara-moreira-g"
            target="_blank"
            rel="noopener noreferrer"
          >
            SaraMorDev
          </a>
        </span>
      </section>
    </div>
  );
}

export default App;
