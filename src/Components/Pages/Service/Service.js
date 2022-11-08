import React, { useEffect, useState } from 'react';

import ServicesCard from './ServicesCard';
import '../Service/service.css';
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
        <div className='m-5 p-5 '>
            <h5 className='text-secondary m-5'> OUR SERVICES </h5>
            <h1 className='text-info mb-5'> We offer a whole range of treatments for you, your family and friends</h1>
           
           <div className=' row row-cols-1 row-cols-md-3 row-cols-lg-4 service  '>
             {
                services.map(service=><ServicesCard
                
                key={service._id}
                service={service}
                
                ></ServicesCard> )
             }
           </div>
        </div>
    );
};

export default Service;