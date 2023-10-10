import React from 'react';
import bgImg from '../../../assets/images/appointment.png';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <div
            style={{
                background: `url(${bgImg})`,
                backgroundPosition: 'cover',
                backgroundPosition: 'center'
            }}
            className='py-52'>
            <div className='pb-10'>
                <h3 className='text-xl text-primary text-center'>Contact Us</h3>
                <h2 className='text-4xl text-center text-white'>Stay connected with us</h2>
            </div>
            <div className='text-center pb-5'>
                <input type="text" placeholder="Email Address" className="input input-bordered  sm:w-[450px] w-[320px]" />
            </div>
            <div className='text-center pb-5'>
                <input type="text" placeholder="Subject" className="input input-bordered sm:w-[450px] w-[320px]" />
            </div>
            <div className='text-center'>
                <textarea placeholder="Your message" className="textarea text-base textarea-bordered sm:w-[450px] h-[136px] w-[320px]" ></textarea>
            </div>
            <div className='text-center pt-12'>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default Contact;