import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const TotalService = ({ service }) => {
  const { _id, title, description} = service;
  return (
    <div>
      <Col className="shadow-lg bg-white rounded">
        <Card className="mb-5">
          <Card.Body>
            <PhotoProvider>
              <PhotoView src={service?.img}>
                <Image
                  variant="top"
                  style={{ width: "100%", height: "300px" }}
                  src={service?.img}
                />
              </PhotoView>
            </PhotoProvider>
            <div class="card-body">
              <h5 class="card-title"> {title} </h5>
              <p class="card-text">
                {description?.length > 100 ? (
                  <> {description?.slice(0, 100) + "..."} </>
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

export default TotalService;
