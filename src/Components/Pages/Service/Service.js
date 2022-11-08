import React, { useEffect, useState } from 'react';

import ServicesCard from './ServicesCard';
import '../Service/service.css';
import { Row } from 'react-bootstrap';

const Service = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch(`https://dentatist-server-rahatbinoamr.vercel.app/services`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    // const services=useLoaderData()
    console.log(services);
    return (
        <div className='m-5 p-5 justify-content-center'>
            <h5 className='text-secondary m-5 text-center'> OUR SERVICES </h5>
            <h1 className='text-info mb-5'> We offer a whole range of treatments for you, your family and friends</h1>
           
           <Row className=' row-cols-1 row-cols-md-4 g-4 service  '>
             {
                services.map(service=><ServicesCard
                
                key={service._id}
                service={service}
                
                ></ServicesCard> )
             }
           </Row>
        </div>
    );
};

export default Service;