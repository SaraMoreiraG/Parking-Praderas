// Map.js
import React from "react";

function Map() {
  return (
    <div className="col-lg-6 col-md-12 p-3">
      <div className="ms-3 row d-flex justify-content-end">
        <div className="d-flex col-12 justify-content-center">
          <i className="fa-solid fa-map-location-dot me-3"></i>
          <p>Carretera Toledo-Madrid Km 32, Illescas.</p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.6297372894505!2d-3.8253002241077914!3d40.15053067179838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41f7cb616e31a5%3A0x3b06f388314143fd!2sParking%20las%20praderas%20Illescas!5e0!3m2!1ses!2ses!4v1713542879384!5m2!1ses!2ses"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="col-12 m-0"
        title="mapa1"
      ></iframe>
    </div>
  );
}

export default Map;
