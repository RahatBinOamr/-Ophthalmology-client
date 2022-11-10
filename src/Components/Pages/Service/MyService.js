import React, { useEffect, useState } from "react";
import {  Row } from "react-bootstrap";
import MyTotalService from "./MyTotalService";



const MyService = () => {
  
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`https://dentatist-server-rahatbinoamr.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

  console.log(services);
  
    return (
      <div className="m-5 p-5">
        <Row className=" row-cols-1  row-cols-md-2 row-cols-lg-3 g-4   ">
            {
              services?.map(service=><MyTotalService
              
              key={service?._id}
              service={service}
              
              ></MyTotalService>)
            }
        </Row>
        
      </div>
    );
  }
  


export default MyService;
