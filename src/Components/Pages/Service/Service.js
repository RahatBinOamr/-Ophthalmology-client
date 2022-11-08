import React, { useEffect, useState } from "react";


import "../Service/service.css";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`https://dentatist-server-rahatbinoamr.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

  console.log(services);
  let count = 0;

  return (
    <div className="m-5 p-5 justify-content-center">
      <h5 className="text-secondary m-5 text-center"> OUR SERVICES </h5>
      <h1 className="text-info mb-5">
        {" "}
        We offer a whole range of treatments for you, your family and friends
      </h1>
     
      <Row className=" row-cols-1  row-cols-md-3 row-cols-lg-4 g-4 service  ">
        {services.map((service) =>{
          count = count + 1;
          if (count <= 3) {
            return (
              <div>
                <>
                  <Col className="shadow-lg bg-white rounded">
                    <Card className="mb-5">
                      <Card.Body>
                        <Image
                          variant="top"
                          style={{ width: "100%", height: "300px" }}
                          src={service.img}
                        />
                        <div class="card-body">
                          <h5 class="card-title"> {service.title} </h5>
                          <p class="card-text">
                            {service.description.length > 100 ? (
                              <> {service.description.slice(0, 100) + "..."} </>
                            ) : (
                              service.description
                            )}
                          </p>
                        </div>
                      </Card.Body>
                      <Link to={`/service/${service._id}`}>
                        <button className="border-0" style={{ width: "100%" }}>
                          {" "}
                          Details{" "}
                        </button>
                      </Link>
                    </Card>
                  </Col>

                  {/* <ServicesCard key={service._id} service={service}></ServicesCard> */}
                </>
               
              </div>
            );
          }
        })}
      </Row>
      <Link to='/service'> <Button variant="secondary">Show More</Button></Link>
    </div>
  );
};

export default Service;
