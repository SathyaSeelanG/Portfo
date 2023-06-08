import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import certificate1 from "../Images/download.jpg";
import certificate2 from "../Images/download.jpg";
import './Certificates1.css'



const CertificateSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  

  return (
    <Slider {...settings}     {...settings}
    style={{ height: '500px', width: '800px' }}>
      <div>
        <img src={certificate1} alt="Certificate 1"style={{ width: '80%', height: '80%' }} />
      </div>
      <div>
        <img src={certificate2} alt="Certificate 2" style={{ width: '80%', height: '80%' }}/>
      </div>
    </Slider>
  );
};

export default CertificateSlider;
