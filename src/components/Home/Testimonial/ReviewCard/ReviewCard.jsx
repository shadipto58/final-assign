import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, image, location, reviewText } = review;
    return (
        <div className="card sm:w-96 bg-base-100 shadow-xl m-auto">
            <div className="card-body">
                <p className='text-black'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            </div>
            <div className='flex items-center px-8 pb-8'>
                <div className='w-16 h-16 flex justify-center items-center rounded-full ring ring-primary ring-offset-2'>
                    <img src={image} alt="" />
                </div>
                <div className='person-name ml-5'>
                    <h2 className='text-xl font-semibold'>{name}</h2>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;