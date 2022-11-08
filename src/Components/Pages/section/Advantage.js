import React from 'react';
import img1 from '../../../Assets/advantage/img1.png'
import img2 from '../../../Assets/advantage/img2.png'
import img3 from '../../../Assets/advantage/img3.png'
import img4 from '../../../Assets/advantage/img4.png'
import img5 from '../../../Assets/advantage/img5.jpg'
import img6 from '../../../Assets/advantage/img6.png'
const Advantage = () => {
    return (
        <div class="row p-5 gy-5 g-2">
            <h4 className='text-secondary text-center'>OUR ADVANTAGES</h4>
            <h1 className='m-5 text-info text-center'> Good vision for many years</h1>

            <section className='d-flex align-items-center  col-2 col-sm-6 col-md-4'>
                <div>
                    <img src={img1} alt="" className='w-50  ' />
                </div>
                <div>
                    <h4 className=''> Best practices </h4>
                </div>
            </section>
            <section className='d-flex justify-content-start align-items-center px-2 col-2 col-sm-6 col-md-4'>
                <div>
                    <img src={img2} alt="" className='w-50 ' />
                </div>
                <div>
                    <h4 className=''> Newest equipment </h4>
                </div>
            </section>
            <section className='d-flex align-items-center col-2 col-sm-6 col-md-4'>
                <div>
                    <img src={img3} alt="" className=' w-50 ' />
                </div>
                <div>
                    <h4 className=''> Doctors experience </h4>
                </div>
            </section>
            <section className='d-flex align-items-center  col-2 col-sm-6 col-md-4'>
                <div>
                    <img src={img4} alt="" className='w-50 ' />
                </div>
                <div>
                    <h4 className=''>Thorough diagnosis </h4>
                </div>
            </section>
            <section className='d-flex align-items-center  col-2 col-sm-6 col-md-4'>
                <div>
                    <img src={img5} alt="" className='w-50 ' />
                </div>
                <div>
                    <h4 className=''>Mobile Patient Engagement </h4>
                </div>
            </section>
            <section className='d-flex align-items-center  col-2 col-sm-6 col-md-4'>
                <div>
                    <img src={img6} alt="" className='w-50 ' />
                </div>
                <div>
                    <h4 className=''>Smart Billing </h4>
                </div>
            </section>
        </div>
    );
};

export default Advantage;