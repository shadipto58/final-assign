import React from 'react';
import Banner from './Banner/Banner';
import OurInfo from './OurInfo/OurInfo';
import OurServices from './OurServices/OurServices';
import SecBanner from './SecBanner/SecBanner';
import MakeAppoient from './MakeAppoient/MakeAppoient';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurInfo></OurInfo>
            <OurServices></OurServices>
            <SecBanner></SecBanner>
            <MakeAppoient></MakeAppoient>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;