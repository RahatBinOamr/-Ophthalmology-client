import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../Assets/Banner/img1.jpg";
import img2 from "../../../Assets/Banner/img2.jpg";
import img3 from "../../../Assets/Banner/img3.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className=" m-5 p-5 ">
      <Carousel>
      <Carousel.Item>
        <img className="Carousel w-100 " src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="text-dark">First slide label</h3>
          <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="Carousel w-100" src={img2} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="text-dark">Second slide label</h3>
          <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="Carousel w-100" src={img3} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="text-dark">Third slide label</h3>
          <p className="text-dark">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Banner;
