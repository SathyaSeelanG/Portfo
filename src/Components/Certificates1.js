import React from "react";
import CertificateSlider from "./CertificateSlider";
import './Certificates1.css'


const Certificates = () => {
  return (
    <div className="certificates-container">
      <div className="certificate">
        <div className="certificate-image">
          <CertificateSlider />
        </div>
        <div className="text">
          {/* <h3>Certificate Title</h3>
          <p>Certificate Description</p>
          <a href="#">View Certificate</a> */}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
