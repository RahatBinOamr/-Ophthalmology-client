import React from "react";
import { Card, Col, Image } from "react-bootstrap";

const ServicesCard = ({ service }) => {
  console.log(service);
  const { title, description, img } = service;
  return (
    <div >
      <Col>
        <Card className="mb-5">
          <Card.Body>
          <Image variant="top" style={{width:'100%',height:'300px'}} src={img} />
            <div class="card-body">
              <h5 class="card-title"> {title} </h5>
              <p class="card-text">
                {description.length > 100 ? (
                  <> {description.slice(0, 100) + "..."} </>
                ) : (
                  description
                )}
              </p>
            </div>
          </Card.Body>
          <button className="border-none" style={{width:'100%'}}> Details </button>
        </Card>
      </Col>
    </div>
  );
};

export default ServicesCard;
