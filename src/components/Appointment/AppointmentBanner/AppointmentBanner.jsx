import React, { useState } from 'react';
import bannerImg from '../../../assets/images/chair.png';
import bgImg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({ selected, setSelected }) => {



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
                <div className="hero-content flex-col justify-evenly lg:flex-row-reverse gap-14">
                    <img src={bannerImg} className="rounded-lg lg:w-1/2 shadow-2xl" />
                    <div>
                        <DayPicker
                            className='bg-base-100 p-3 rounded'
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;