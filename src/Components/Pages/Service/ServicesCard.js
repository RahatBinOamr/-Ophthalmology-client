import React from 'react';
import { Image } from 'react-bootstrap';

const ServicesCard = ({service}) => {
    console.log(service)
    const {title,description,img,   }=service
    return (
        <div class="card col-md-4 g-3 px-5 ">
        <Image src={img} className="card-img-top w-100 h-50" alt="..."/>
        <div class="card-body">
          <h5 class="card-title"> {title} </h5>
          <p class="card-text"> 
          
          {
            
                 description.length > 100 ?
                   <> {description.slice(0, 100) + '...'} </>
                    :
                    description
            }
          
          
           </p>
        
        </div>
      </div>
    );
};

export default ServicesCard;