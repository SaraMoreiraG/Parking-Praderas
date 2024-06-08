import React from 'react';
import banner from '../images/banner.jpg';

const Banner = () => {
  return (
    <section id="banner-home">
      <img
        src={banner}
        className="img-fluid p-0"
        alt="banner parking las praderas"
      />
    </section>
  );
};

export default Banner;
