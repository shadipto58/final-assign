import React from 'react';
import './MakeAppoient.css'
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import bgImg from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';
import smallDoctor from '../../../assets/images/doctor-small.png'

const MakeAppoient = () => {
    return (
        <div
            style={{
                background: `url(${bgImg})`,
                backgroundPosition: 'cover',
                backgroundPosition: 'center'
            }}
            className="">

            <div className="hero makeAppoient">
                <div className="hero-content lg:p-0 sm:py-16 flex-col lg:flex-row gap-14">
                    <img src={smallDoctor} className="rounded-lg -mt-28 lg:block hidden" />
                    <div className=''>
                        <h3 className='text-xl text-secondary font-bold pb-5'>Appointment</h3>
                        <h2 className='text-4xl text-white pb-5'>Make an appointment Today</h2>
                        <p className='max-w-lg text-white pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppoient;