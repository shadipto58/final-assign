import React from 'react';
import bgImg from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <div
            style={{
                background: `url(${bgImg})`,
                backgroundPosition: 'cover',
                backgroundPosition: 'center'
            }}
            className='pt-24'
        >
            <footer className="footer  text-base-content">
                <nav className='m-auto'>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup </a>
                </nav>
                <nav className='m-auto'>
                    <header className="footer-title">ORAL HEALTH</header>
                    <a className="link link-hover">ORAL HEALTH</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening </a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='m-auto'>
                    <header className="footer-title">OUR ADDRESS</header>
                    <a className="link link-hover">New York - 101010 Hudson</a>

                </nav>
            </footer>
            <div className='pt-24 pb-12'>
                <h2 className='text-center'>Copyright 2022 All Rights Reserved</h2>
            </div>
        </div>
    );
};

export default Footer;