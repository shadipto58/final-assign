import React from 'react';

const ServiceCard = ({ service }) => {
    const { name, icon, des } = service;
    return (
        <div className={`card shadow-xl px-5 py-9`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold md:text-center sm:text-center text-accent">{name}</h2>
                <p className='text-accent md:text-center sm:text-center'>{des}</p>
            </div>
        </div>
    );
};

export default ServiceCard;