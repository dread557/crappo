import React, { useState, useEffect } from 'react'
import Button from './Button'
import { motion } from 'framer-motion'

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(false)
    const [screenSize, setScreenSize] = useState(null)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [setScreenSize])

    useEffect(() => {
        if (screenSize <= 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])

    const links = [
        { name: 'Product', link: '/' },
        { name: 'Features', link: '/' },
        { name: 'About', link: '/' },
        { name: 'Contact', link: '/' }
    ]
    return (
        <motion.header
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 50 }}
            className='flex justify-between p-12 pt-8 items-center'>
            <img src='../assets/logo-0.svg' alt='logo' />
            <div onClick={() => setActiveMenu(!activeMenu)} className='text-white text-2xl md:hidden cursor-pointer'>
                <ion-icon name={activeMenu ? 'close' : 'menu'}></ion-icon>
            </div>
            {activeMenu && (
                <motion.div
                    initial={{ y: '-100vh', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    className='flex flex-col md:flex-row justify-center md:justify-end h-screen md:h-fit items-center absolute md:relative top-28 md:top-0 space-x-16 bg-[#5c6b87] w-[100%] left-0 right-0 md:bg-inherit'>
                    <nav className='flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-16 '>
                        {links.map((link) => (
                            <a key={link.name} className='hover:border-b border-[#3671E9]' href={link.link}>{link.name}</a>
                        ))}
                    </nav>
                    <div className='flex space-x-5 mt-4 md:mt-0 items-center'>
                        <a className='border-r border-gray-400 pr-4 hover:border-b-[#3671E9]' href='/'>Login</a>
                        <Button>Register</Button>
                    </div>
                </motion.div>
            )}
        </motion.header>
    )
}

export default Navbar