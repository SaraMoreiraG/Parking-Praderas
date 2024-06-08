import React, { useState } from "react";
import { getAccessToken, fetchMerchantInfo } from "./api/bbva";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import OurServices from "./components/OurServices";
import BannerSocialMedia from "./components/BannerSocialMedia";
import AboutUs from "./components/AboutUs";
import BannerPayment from "./components/BannerPayment";
import Footer from "./components/Footer";

import caravana from "./images/caravana.jpg";
import autocaravana from "./images/autocaravana.jpg";
import camion from "./images/camion.jpg";

import "./App.css";

function App() {
  const [month, setMonth] = useState(0);
  const [vehicle, setVehicle] = useState("");

  const [accessToken, setAccessToken] = useState("");
  const [merchantInfo, setMerchantInfo] = useState("");
  const [error, setError] = useState("");

  const handleGetAccessToken = async () => {
    try {
      const token = await getAccessToken();
      setAccessToken(token);
    } catch (error) {
      console.error("Error obtaining access token:", error);
      setError("Error obtaining access token");
    }
  };

  const handleFetchMerchantInfo = async () => {
    try {
      const info = await fetchMerchantInfo(accessToken);
      setMerchantInfo(info);
    } catch (error) {
      console.error("Error fetching merchant info:", error);
      setError("Error fetching merchant info");
    }
  };

  console.log(month, vehicle, process.env.REACT_APP_SECRET_KEY);
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <OurServices />
      <section id="map">
        <div className="row mt-0 pt-5">
          <div className="col-lg-6 d-flex justify-content-center mb-4">
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
          <div className="col-lg-6 align-items-center mt-4">
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
              <div className="d-flex col-6 text-end justify-content-end pe-3 pt-2 pb-3">
                <span>1. Elige número de meses</span>
                <i className="fa-regular fa-hand-point-up ms-3"></i>
              </div>
            ) : (
              // Vehicles selection
              <div className="row mx-0 mt-3">
                <div className="col-3">
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
                <div className="col-3">
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
                <div className="col-3">
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
                      {/* BBVA API CALL HERE */}
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
                      {/* BBVA API CALL HERE */}
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
                      {/* BBVA API CALL HERE */}
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
                      {/* BBVA API CALL HERE */}
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
                      {/* BBVA API CALL HERE */}
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
                      {/* BBVA API CALL HERE */}
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
      <div>
        <button onClick={handleGetAccessToken}>Obtener Token</button>
        <button onClick={handleFetchMerchantInfo} disabled={!accessToken}>
          Obtener Información del Comerciante
        </button>
        <p>Token: {accessToken}</p>
        <p>Información del Comerciante: {JSON.stringify(merchantInfo)}</p>
        <p>Error: {error}</p>
      </div>
      <BannerSocialMedia />
      <AboutUs />
      <BannerPayment />
      <Footer />
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
