import React from "react";
import img1 from "../../../Assets/section/images2.jpg";
import img2 from "../../../Assets/section/images3.png";
const Section = () => {
  return (
    
    <div className="m-5 p-5">

      <h1 className="text-secondary m-5 text-center"> ABOUT CLINIC</h1>
      <section className=" d-flex  justify-content-between w-100 align-items-start mb-5">
        <div className="w-50">
          <img src={img1} variant="start" alt="" className="  w-100%" />
        </div>
        <div className="w-50 bg-info text-light rounded align-items-start justify-content-start p-4 ">
          <h3 className="mb-4 text-center">
            We are a recognized leader in high-tech ophthalmology services
          </h3>
          <p className="justify-content-start text-center ">
            <li className="justify-content-start text-start">
              Performing all operations and procedures at the highest
              professional level using the most modern methods.
            </li>
            <li className="justify-content-start text-start">
              Drawing up an individual treatment program for each patient.
            </li>
            <li className="justify-content-start text-start">
              Compliance of materials and equipment with international
              standards, the availability of all necessary certificates and
              permits.
            </li>
          </p>
        </div>
      </section>
      <section className=" d-flex justify-content-between w-100 align-items-start mb-5 mt-5" >
        <div className="w-50 bg-info text-light rounded align-items-start justify-content-start p-4 ">
          <h3 className="mb-4 text-center">Unique technology</h3>
          <p >
            Unique Technologies designs, manufactures, and distributes an array
            of precision microsurgical instruments including a line of finished
            sterile knives and blades for the ophthalmic industry. Unique also
            offers private label and contract manufacturing options and reaches
            into other medical specialties including the cardiovascular,
            dermatology, and veterinary industries.
          </p>
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Section;
