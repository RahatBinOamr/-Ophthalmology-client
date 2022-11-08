import React from "react";
import { Card } from "react-bootstrap";
import { FaEye, FaStar } from "react-icons/fa";
import {  useLoaderData } from "react-router-dom";
import Visit from "../Home/Visit/Visit";

const ServicesCardDetails = () => {
  const { title, visit, rating, total_view, description, img } =
    useLoaderData();

  return (
    <div className="m-5 p-5">
      <Card className="mb-5 mt-4 w-75 justify-content-center">
        {/* <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                <Image
                    roundedCircle
                    className='me-2'
                    src={instructor?.img}
                    style={{ height: '60px' }}
                ></Image>
                <div>
                    <p className='mb-0'>{instructor?.name}</p>
                    <p>{instructor?.published_date}</p>
                </div>
            </div>
            <div>
                <FaRegBookmark className='me-2'></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
            </div>
        </Card.Header> */}

        <Card.Body className="mb-5" >
        
          <Card.Img style={{ height: "300px" }} variant="top" src={img} />
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div>
            
            <h3>
             Visit: $<span> {visit} </span>
            </h3>
           
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <div>
            <FaStar className="text-warning me-2"></FaStar>
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye className="me-2"></FaEye>
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>

<Visit></Visit>

    </div>
  );
};

export default ServicesCardDetails;
