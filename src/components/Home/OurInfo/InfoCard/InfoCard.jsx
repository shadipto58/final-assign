import React from 'react';

const InfoCard = ({ card }) => {
    const { name, des, icon, bgClass } = card;
    return (
        <div className={`card lg:card-side ${bgClass} shadow-xl px-5 py-9`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold md:text-center sm:text-center text-white">{name}</h2>
                <p className='text-white md:text-center sm:text-center'>{des}</p>
            </div>
        </div>
    );
};

export default InfoCard; 