import React, { useState } from "react";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import OurServices from "./components/OurServices";
import Map from "./components/Map";
import VehicleSelection from "./components/VehicleSelection";
import BannerSocialMedia from "./components/BannerSocialMedia";
import AboutUs from "./components/AboutUs";
import BannerPayment from "./components/BannerPayment";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [month, setMonth] = useState(0);
  const [vehicle, setVehicle] = useState("");

console.log(month)
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <OurServices />
      <section id="map" className="row m-0">
        <Map />
        <VehicleSelection
          month={month}
          setMonth={setMonth}
          vehicle={vehicle}
          setVehicle={setVehicle}
        />
      </section>
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
