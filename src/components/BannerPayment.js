import React from "react";
import payment from "../images/payment.png";


function BannerPayment() {
  return (
    <section id="secure-payment">
      <div className="row text-center mx-0">
        <h2>Pago seguro</h2>
      </div>
      <div className="row justify-content-center mx-0 mb-4">
        <div className="social-media-icons text-center col-md-4 col-sm-6 col-9">
          <img src={payment} alt="secure-payment" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}

export default BannerPayment;
