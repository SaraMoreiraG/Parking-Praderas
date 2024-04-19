import NavBar from "./components/NavBar";

import banner from "./images/banner.jpg";

import "./App.css";

function App() {
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
            <div className="service-card big bg-danger">
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
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="m-0"
              title="mapa1"
            ></iframe>
          </div>
          <div className="col-6 d-flex align-items-center">
            <div className="ms-3">
              <div className="d-flex ">
                <i class="fa-solid fa-map-location-dot me-3"></i>
                <p>Carretera Toledo-Madrid Km 32</p>
              </div>
              <div className="d-flex ">
              <i class="fa-solid fa-phone me-3"></i>
                <p>+34 681 974 256</p>
              </div>
              <div className="d-flex ">
              <i class="fa-regular fa-envelope me-3"></i>
                <p>parkinglaspraderas@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center py-5">
          <div className="btn-purple col-2">No te quedes sin sitio!</div>
        </div>
      </section>
    </div>
  );
}

export default App;
