import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'

const OurServices = () => {

    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            des: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam magnam molestiae assumenda iste tenetur sed error fuga id incidunt possimus!",
            icon: fluoride,
        },
        {
            id: 2,
            name: 'Teeth Whitening',
            des: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam magnam molestiae assumenda iste tenetur sed error fuga id incidunt possimus!",
            icon: cavity,
        },
        {
            id: 3,
            name: 'Cavity Filling',
            des: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam magnam molestiae assumenda iste tenetur sed error fuga id incidunt possimus!",
            icon: whitening,
        },
    ]

    return (
        <div className='lg:my-28 sm:my-10 my-16'>
            <div className='mb-20'>
                <h3 className='text-xl text-secondary font-bold text-center'>OUR SERVICES</h3>
                <h2 className='text-4xl text-accent text-center'>Services We Provide</h2>
            </div>
            <div className='grid gap-10 lg:grid-cols-3 px-5 my-5'>
                {serviceData.map(service => <ServiceCard
                    key={service.id}
                    service={service}
                ></ServiceCard>)}
            </div>
        </div>
    );
};

export default OurServices;