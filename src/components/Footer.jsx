import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <footer
            data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
            className='p-12 '>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex items-start mb-9 md:mb-0'>
                    <a href='#top'><img src='../assets/logo-0.svg' alt='logo' /></a>
                </div>
                <div className='mb-7'>
                    <h4 data-aos="fade-up" data-aos-duration="400" className='mb-4 font-semibold'>Quick Links</h4>
                    <ul className='space-y-3'>
                        <li data-aos="fade-up" data-aos-duration="600"><a href='/'>Home</a></li>
                        <li data-aos="fade-up" data-aos-duration="800"><a href='/'>Products</a></li>
                        <li data-aos="fade-up" data-aos-duration="1000"><a href='/'>About</a></li>
                        <li data-aos="fade-up" data-aos-duration="1200"><a href='/'>Features</a></li>
                        <li data-aos="fade-up" data-aos-duration="1400"><a href='/'>Contacts</a></li>
                    </ul>
                </div>
                <div className='mb-7'>
                    <h4 data-aos="fade-up" data-aos-duration="400" className='mb-4 font-semibold'>Resources</h4>
                    <ul className='space-y-3'>
                        <li data-aos="fade-up" data-aos-duration="600"><a href='/'>Download Whitepaper</a></li>
                        <li data-aos="fade-up" data-aos-duration="800"><a href='/'>Smart Team</a></li>
                        <li data-aos="fade-up" data-aos-duration="1000"><a href='/'>Blockchain Explorer</a></li>
                        <li data-aos="fade-up" data-aos-duration="1200"><a href='/'>Crypto API</a></li>
                        <li data-aos="fade-up" data-aos-duration="1400"><a href='/'>Interest</a></li>
                    </ul>
                </div>
                <div className='flex flex-col space-y-5 mb-7'>
                    <h4 className='text-xl md:text-3xl md:w-[60%]'>We accept following payment systems</h4>
                    <div className='flex items-center space-x-8'>
                        <img src='../assets/Visa.png' alt='visa' />
                        <img src='../assets/logos_mastercard.png' alt='mc' />
                        <img src='../assets/logos_bitcoin.png' alt='btc' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between mt-10 items-center'>
                <p>©2021 CRAPPO. All rights reserved</p>
                <div className='flex space-x-10 mt-4 md:mt-0'>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </div>
            </div>
        </footer>

    )
}

export default Footer