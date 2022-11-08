import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  console.log(service);
  const {_id, title, description, img } = service;
  return (
    <div>
      <Col className="">
        <Card className="mb-5">
          <Card.Body>
            <Image
              variant="top"
              style={{ width: "100%", height: "300px" }}
              src={img}
            />
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
          <Link to={`/service/${_id}`}>
            <button className="border-0" style={{ width: "100%" }}>
              {" "}
              Details{" "}
            </button>
          </Link>
        </Card>
      </Col>
    </div>
  );
};

export default ServicesCard;
