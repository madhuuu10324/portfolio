"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink

const navLinks = [
    { title: "About", path: "about" }, // Updated to be compatible with react-scroll
    { title: "Portfolio", path: "portfolio" },
    { title: "Contact Me", path: "contact" }
];

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    };

    return (
        <div className='text-white/70'>
            <div className='hidden md:flex justify-center mx-auto'>
                <ul className='flex flex-row p-8 space-x-8'>
                    {navLinks.map((link, index) => (
                        <li key={index} className="relative group">
                            <ScrollLink 
                                to={link.path} 
                                smooth={true} 
                                duration={500} // Duration of the scroll animation
                            >
                            {link.title}
                            </ScrollLink>
                            <span className="absolute left-0 -bottom-1 w-0 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>
            </div>

            <div onClick={toggleNav} className='md:hidden absolute top-5 right-5 border rounded text-white/70 border-white/70 p-2 z-50'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <motion.div
                initial={false}
                animate={nav ? 'open' : 'closed'}
                variants={menuVariants}
                // className='fixed left-0 top-0 bottom-0 right-0 w-full h-screen z-40 bg-blue'
                className="fixed justify-center items-center z-20"
            >
                <ul className='text-lg font-semibold my-24 text-center space-y-8'>
                    {navLinks.map((link, index) => (
                        <li key={index} className="relative group">
                            <ScrollLink 
                                to={link.path} 
                                smooth={true} 
                                duration={500} 
                                onClick={closeNav}
                            >
                                {link.title}
                            </ScrollLink>
                            <span className="absolute left-0 -bottom-1 w-0 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default NavBar;