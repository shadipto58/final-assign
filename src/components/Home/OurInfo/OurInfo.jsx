import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'
import InfoCard from './InfoCard/InfoCard';

const OurInfo = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            des: "Open at 10.00 am to 6.00 pm",
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            name: 'Visit Our location',
            des: "Brooklyn, NY 10036, United States",
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us',
            des: "+000 123 456789",
            icon: phone,
            bgClass: 'bg-primary'
        },
    ]
    return (
        <div className='grid gap-10 lg:grid-cols-3 px-5 my-5'>
            {cardData.map(card => <InfoCard
                key={card.id}
                card={card}
            ></InfoCard>)}
        </div>
    );
};

export default OurInfo;