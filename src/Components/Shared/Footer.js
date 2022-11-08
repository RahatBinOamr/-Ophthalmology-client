import React from "react";
import {  FaDailymotion, FaFacebook, FaLinkedin, FaLocationArrow, FaPlaystation, FaTwitter} from 'react-icons/fa';
import img from "../../Assets/nav/img.jpg";


const Footer = () => (
  <footer className="page-footer bg-dark text-light font-small blue pt-4">
  <div className="container-fluid text-center text-md-left">
      <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Ophthalmology</h5>
             <img src={img} alt="" />
          </div>

          <hr className="clearfix w-100 d-md-none pb-0"/>

          <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase"> Another CLINIC</h5>
              <ul className="list-unstyled">
                  <li> <FaPlaystation/> Chittagong </li>
                  <li> <FaLocationArrow/> Dhaka </li>
                  <li> <FaDailymotion/> Barsal </li>
                  
              </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">contact</h5>
              <ul className="list-unstyled">
                  <li> <FaFacebook/> Facebook </li>
                  <li> <FaTwitter/> Twitter </li>
                  <li> <FaLinkedin/> Linkedin </li>
                 
              </ul>
          </div>
      </div>
  </div>

  <div className="footer-copyright text-center py-3">© 2020 Copyright: @Ophthalmology
    
  </div>

</footer>
);

export default Footer;
