import React from "react";
import caravana from "../images/caravana.jpg";
import autocaravana from "../images/autocaravana.jpg";
import camion from "../images/camion.jpg";

function VehicleSelection({ month, setMonth, vehicle, setVehicle }) {
  const stripeLinks = {
    caravana: {
      1: process.env.REACT_APP_STRIPE_CARAVANA_1,
      6: process.env.REACT_APP_STRIPE_CARAVANA_2,
    },
    autocaravana: {
      1: process.env.REACT_APP_STRIPE_AUTOCARAVANA_1,
      6: process.env.REACT_APP_STRIPE_AUTOCARAVANA_2,
    },
    camion: {
      1: process.env.REACT_APP_STRIPE_CAMION_1,
      6: process.env.REACT_APP_STRIPE_CAMION_2,
    },
  };
  return (
    <div className="col-lg-6 col-md-12 mb-4 text-center">
      <h2>Reserva tu plaza de parking</h2>
      <div className="row justify-content-center m-0 ">
        <div className="d-flex col-7">
          <select
            className="form-select text-center"
            aria-label="Default select example"
            onChange={(e) => setMonth(parseInt(e.target.value))}
          >
            <option value="0">¿Cuánto tiempo quieres quedarte?</option>
            <option value="1">1 mes</option>
            <option value="6">6 meses</option>
          </select>
        </div>
      </div>
      {month !== 1 && month !== 6 && (
        <div className="row justify-content-center pt-2 pb-3 m-0">
          <div className="d-flex justify-content-end col-7">
            <span>1. Elige número de meses</span>
            <i className="fa-regular fa-hand-point-up ms-3"></i>
          </div>
        </div>
      )}
      <div className="row justify-content-center mx-0 mt-3">
        <div className="col-sm-4 mb-3">
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
            {month === 6 ? (
              <p className="price">300€</p>
            ) : month === 1 ? (
              <p className="price">50€</p>
            ) : (
              <p className="price">Desde 50€</p>
            )}
          </div>
        </div>
        <div className="col-sm-4 mb-3">
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
            {month === 6 ? (
              <p className="price">300€</p>
            ) : month === 1 ? (
              <p className="price">50€</p>
            ) : (
              <p className="price">Desde 50€</p>
            )}
          </div>
        </div>
        <div className="col-sm-4 mb-3">
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
            {month === 6 ? (
              <p className="price">810€</p>
            ) : month === 1 ? (
              <p className="price">135€</p>
            ) : (
              <p className="price">Desde 135€</p>
            )}
          </div>
        </div>
      </div>

      {vehicle === null ||
        (vehicle === "" && (
          <div className="d-flex col-12 justify-content-center pe-3 pt-2 pb-3">
            <span>2. Elige tu vehículo</span>
            <i className="fa-regular fa-hand-point-up ms-3"></i>
          </div>
        ))}
      {/* LINK TO STRIPE */}
      {month !== 0 && vehicle !== "" && (
        <div className="row justify-content-center mt-4 mb-3">
          <div className="btn-purple col-3">
            <a
              href={stripeLinks[vehicle][month]}
              className=" "
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default VehicleSelection;
