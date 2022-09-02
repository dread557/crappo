import React, { useEffect } from 'react'
import Button from './Button'
import { motion, useAnimation } from 'framer-motion'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useInView } from 'react-intersection-observer'

const Advert = () => {

    const { ref, inView } = useInView({
        threshold: 0.3
    })
    const animate = useAnimation()

    useEffect(() => {
        if (inView) {
            animate.start('visible')
        } else {
            animate.start('hidden')
        }
    }, [inView, animate])

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])


    const containerVariants = {
        hidden: {
            opacity: 0,
            x: '100vw'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                mass: 0.3,
                damping: 8,
                when: 'beforeChildren',
                staggerChildren: .4,
                delay: 0.4
            }
        }
    }

    const childVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const items = [
        { num: '$30B', txt: 'Digital Currency Exchanged', img: '../assets/Barchart.png' },
        { num: '10M+', txt: 'Trusted Wallets Investor', img: '../assets/Person.png' },
        { num: '195', txt: 'Countries Supported', img: '../assets/Earth.png' },
    ]

    const options = [
        { name: 'TH/s' },
        { name: 'H/s' },
        { name: 'KH/s' },
        { name: 'MH/s' },
        { name: 'GH/s' },
    ]

    const cards = [
        {
            logo: '../assets/btc.png',
            name: 'Bitcoin',
            aka: 'BTC',
            txt: 'Digital currency in which a record of transactions is maintained.'
        },
        {
            logo: '../assets/eth.png',
            name: 'Ethereum',
            aka: 'ETH',
            txt: 'Blockchain technology to create and run decentralized digital applications..'
        },
        {
            logo: '../assets/ltc.png',
            name: 'Litecoin',
            aka: 'LTC',
            txt: 'Cryptocurrency that enables instant payments to anyone in the world.'
        },

    ]
    return (
        <section>
            <div className='flex p-12 flex-col pb-64'>
                <div data-aos="zoom-in" data-aos-duration="1000" className=' flex flex-col md:flex-row justify-between items-center space-y-7 md:space-y-0'>
                    {items.map((item) => (
                        <div key={item.num} className='flex space-x-3 items-start'>
                            <img className='bg-gray-700 p-4 rounded-full' src={item.img} alt={item.txt} />
                            <span className='flex flex-col'>
                                <h4 className='font-bold text-2xl md:text-4xl mb-0'>{item.num}</h4>
                                <p>{item.txt}</p>
                            </span>
                        </div>
                    ))}
                </div>
                <div ref={ref} className='flex flex-col md:flex-row items-center justify-between mt-12 md:space-x-20'>
                    <div data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <img src='../assets/illustrations.png' alt='' />
                    </div>
                    <motion.div
                        variants={containerVariants}
                        initial='hidden'
                        animate={animate}
                    >
                        <motion.h2 variants={childVariants} className='text-3xl md:text-5xl md:w-[80%] font-bold mb-6 mt-7 md:mt-0'>Why you should choose CRAPPO</motion.h2>
                        <motion.p variants={childVariants} className='md:w-[65%] mb-8'>Experience the next generation cryptocurrency platform.
                            No financial borders, extra fees, and fake reviews.</motion.p>
                        <Button>Learn More</Button>
                    </motion.div>
                </div>
                <div className='flex justify-center flex-col items-center mt-24'>
                    <h2 data-aos="fade-up" data-aos-duration="500" className='text-4xl font-bold mb-6'>Check how much you can earn</h2>
                    <p data-aos="fade-up" data-aos-duration="1000" className='md:w-[40%] md:text-center'>Let's check your hash rate to see how much you
                        will earn today, Exercitation veniam consequat
                        sunt nostrud amet.</p>
                </div>
            </div>
            <div className='flex flex-col items-center bg-[#edecec] relative p-12 pt-[19rem]'>
                <div data-aos="zoom-in-up" className='md:w-[900px] bg-white rounded-[32px] flex flex-col p-7 absolute top-[-10%] md:top-[-15%] ml-8 mr-8'>
                    <form data-aos="fade-up" data-aos-duration="1000" className='flex flex-col md:flex-row justify-between items-center space-y-7 md:space-y-0'>
                        <input className='border-b text-[#0D0D2B] w-full  md:w-[350px] outline-0' type='text' placeholder='Enter your hash rate' />
                        <select className='border-b w-full md:w-[200px] text-[#0D0D2B] h-9'>
                            {options.map((option) => (
                                <option key={option.name} value={option.name}>{option.name}</option>
                            ))}
                        </select>
                        <Button data-aos="fade-up" data-aos-duration="1000" type='submit'>Calculate</Button>
                    </form>
                    <div className='mt-20'>
                        <h5 data-aos="fade-up" data-aos-duration="800" className='text-[#3671E9] font-semibold'>ESTIMATED 24 HOUR REVENUE:</h5>
                        <p data-aos="fade-up" data-aos-duration="1200" className='text-[#0D0D2B] font-bold text-3xl'>0.055 130 59 ETH <span className='text-[#3671E9]'>($1275)</span></p>
                        <p data-aos="fade-up" data-aos-duration="1600" className='text-[#8a8a97]'>Revenue will change based on mining difficulty and Ethereum price.</p>
                    </div>
                </div>
                <h1 data-aos="zoom-in-down" data-aos-duration="1200" className='text-[#0D0D2B] text-3xl font-bold md:w-[40%] text-center mb-16'>Trade securely and market the high growth cryptocurrencies.</h1>
                <div
                    data-aos="fade-up"
                    className='flex flex-col md:flex-row md:space-x-10 mb-24 space-y-5 md:space-y-0'>
                    {cards.map((card) => (
                        <div key={card.name} className='click-style flex flex-col h-[433px] items-center text-center p-5  rounded-2xl bg-white hover:cursor-pointer'>
                            <img data-aos="fade-up" data-aos-duration="600" className='mt-12 mb-12' src={card.logo} alt={card.name} />
                            <h3 data-aos="fade-up" data-aos-duration="1000" className='text-[#0D0D2B] font-bold text-4xl flex space-x-8'>{card.name} <span className='text-sm text-gray-300'>{card.aka}</span></h3>
                            <p data-aos="fade-up" data-aos-duration="1400" className='mb-6'>{card.txt}</p>
                            <img data-aos="fade-up" data-aos-duration="1800" className='p-3 border rounded-full' src='../assets/arrow-right.svg' alt='arrow' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Advert