import React from 'react';
import comma from '../../../assets/images/big-comma.png';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png';
import ReviewCard from './ReviewCard/ReviewCard';
import './Testimonial.css'



const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            image: people1,
            reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            id: 2,
            name: 'Winson Herry',
            image: people2,
            reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            id: 3,
            name: 'Winson Herry',
            image: people3,
            reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },

    ]
    return (
        <div className='testimonial-wrapper'>
            <div className='testimonial-title flex justify-between items-center px-14 pt-20'>
                <div>
                    <h3 className='text-xl text-secondary font-bold pb-2.5'>Testimonial</h3>
                    <h2 className='text-4xl text-accent'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={comma} alt="" />
                </div>
            </div>
            <div className='my-28'>
                <div className='grid gap-10 lg:grid-cols-3 px-5 my-5'>
                    {reviews.map(review => <ReviewCard
                        key={review.id}
                        review={review}
                    ></ReviewCard>)}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;