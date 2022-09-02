import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import AOS from 'aos'
import "aos/dist/aos.css"

const HeroSection = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                ease: 'easeInOut',
                mass: 0.4,
                damping: 7,
                delayChildren: 0.5,
                staggerChildren: 0.3,
                when: 'beforeChildren'
            }
        }
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const itemBtn = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1
        }
    }

    return (
        <section className=' flex flex-col md:flex-row items-center  p-12 pt-0 bg-[url("/public/assets/bg-line.png")]'>
            <motion.div
                variants={container}
                initial='hidden'
                animate='visible'
                className='md:w-[50%]'>
                <motion.p
                    variants={item}
                    className='bg-gray-600 rounded-[32px] md:w-fit p-2 pl-0 hero-p'><span className='bg-white text-[0.7rem] md:text-sm text-[#0D0D2B] p-2 rounded-[32px]'>75% SAVE</span> For the Black Friday weekend</motion.p>
                <motion.h1
                    variants={item}
                    className='text-3xl md:text-6xl mt-6 mb-6 font-bold'>Fastest & secure platform to invest in crypto</motion.h1>
                <motion.p className='md:w-[60%]'>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</motion.p>
                <motion.div
                    variants={container}
                    initial='hidden'
                    animate='visible'
                    className='h-[52px] mt-6 w-[202px] bg-[#3671E9] rounded-[32px] flex items-center justify-evenly' tabIndex='0' role='button' >
                    Try for FREE <motion.span variants={itemBtn} className='bg-white rounded-full'>
                        <img src='../assets/arrow-right.svg' alt='arrow' />
                    </motion.span></motion.div>
            </motion.div>
            <div
                data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50"
                className="">
                <img src='../assets/illustration.png' alt='bitcoin' />
            </div>
        </section>
    )
}

export default HeroSection