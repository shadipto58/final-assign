import React from 'react';
import bannerImg from '../../../assets/images/chair.png';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import bgImg from '../../../assets/images/bg.png';
import './Banner.css'

const Banner = () => {
    return (
        <div
            style={{
                background: `url(${bgImg})`,
                backgroundPosition: 'cover',
                backgroundPosition: 'center'
            }}
            className="lg:py-52 banner"
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse gap-14">
                    <img src={bannerImg} className="rounded-lg lg:w-1/2 shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;