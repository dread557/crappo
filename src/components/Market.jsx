import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Button from './Button'

const Market = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <section>
            <div className='p-12 bg-[#2B076E] bg-[url("/public/assets/o.png")] bg-no-repeat'>
                <h1 className='text-2xl md:text-4xl font-bold text-center md:w-[60%] m-auto'>Market sentiments, portfolio, and run the infrastructure of your choice</h1>
                <div className='flex flex-col md:flex-row mt-24'>
                    <div className='mb-10 md:mb-10'>
                        <h1 data-aos="fade-up" data-aos-duration="600" className='font-bold text-2xl md:text-3xl mb-6'>Invest Smart</h1>
                        <p data-aos="fade-up" data-aos-duration="800" className='w-[80%] mb-8'>Get full statistic information about the behaviour
                            of buyers and sellers will help you to make the decision. </p>
                        <Button data-aos="fade-up" data-aos-duration="1300">Learn More</Button>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="1500"
                    >
                        <img src='../assets/Chart.png' alt='chart' />
                    </div>
                </div>
                <div data-aos-delay="1000" className='flex flex-col md:flex-row mt-24 lg:space-x-32'>
                    <div
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="1500"
                    >
                        <img src='../assets/chart-2.png' alt='chart' />
                    </div>
                    <div className='mb-10 md:mb-10'>
                        <h1 data-aos="fade-up" data-aos-duration="600" className='font-bold text-2xl md:text-3xl mb-6'>Detailed Statistics</h1>
                        <p data-aos="fade-up" data-aos-duration="800" className='w-[80%] mb-8'>View all mining related information in realtime,
                            at any point at any location and decide which polls you want to mine in. </p>
                        <Button data-aos="fade-up" data-aos-duration="1300">Learn More</Button>
                    </div>
                </div>
                <div data-aos-delay="2000" className='flex flex-col md:flex-row mt-24'>
                    <div className='mb-10 md:mb-10'>
                        <h1 data-aos="fade-up" data-aos-duration="600" className='font-bold text-2xl md:text-3xl mb-6 md:w-[70%]'>Grow your profit and track your investments</h1>
                        <p data-aos="fade-up" data-aos-duration="800" className='w-[80%] mb-8'>Use advanced analytical tools. Clear
                            TradingView charts let you track current and historical profit investments.</p>
                        <Button data-aos="fade-up" data-aos-duration="1300">Learn More</Button>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-delay="300"
                        data-aos-duration="1500"
                    >
                        <img src='../assets/Table.png' alt='chart' />
                    </div>
                </div>
            </div>
            <div data-aos-delay="1000" className='p-12 bg-gradient-to-b from-[#2B076E] to-[#0D0D2B]'>
                <div
                    data-aos="flip-up"
                    data-aos-duration="1000"
                    className='flex flex-col md:flex-row justify-between p-10 bg-[#3671E9] h-auto md:h-[216px] rounded-2xl bg-[url("/public/assets/bg-eth.png"),_url("/public/assets/bg-btc.png")] bg-no-repeat bg-[position:left_top,_right_bottom] '>
                    <div className=''>
                        <h4 className='text-2xl md:text-3xl font-bold mb-6'>Start mining now</h4>
                        <p className='md:w-[70%]'>Join now with CRAPPO to get the latest news and start mining now</p>
                    </div>
                    <form className='flex flex-col md:flex-row items-center md:w-[50%] justify-between'>
                        <input className='bg-transparent w-[100%] mt-2 md:mt-0 md:w-[70%] border-b placeholder:text-white outline-0 pb-1' type='email' placeholder='Enter your email' />
                        <button className='h-[40px] md:h-[52px] w-[132px] bg-white rounded-[32px] mt-2 md:mt-0 font-semibold text-[#0D0D2B]'>Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Market