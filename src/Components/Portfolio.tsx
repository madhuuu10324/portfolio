"use client";
import Image from "next/image";
import { motion } from 'framer-motion';
import project from "../assets/proj2.jpg";
import project1 from "../assets/runclub.png";
import project2 from "../assets/proj2.jpg";
import { FaLink, FaGithub } from 'react-icons/fa'; // Import icons

import React from 'react';

const projects = [
    {
        title: "RunClubInc.",
        desc: "An Platform for runners.",
        devstack: "NextJs, Firebase",
        link: "https://runclubinc.web.app/",
        git: "https://github.com/madhuuu10324/RunClubInc",
        src: project1
    },
    {
        title: "Travel Recommendation System using Hybrid recommendation System",
        desc: "Travel recommendation system done using Hybrid approaches such as Collaborative and content based filtering.",
        devstack: "ReactJs , Django",
        link: "#",
        git: "#",
        src: project,
    },
    {
        title: "Ecommerce Digital Products",
        desc: "bleh bleh bla bleh bleh blaah ble bleh dfhab hvsbksb",
        devstack: "MongoDB, Express, React, Node.js",
        link: "#",
        git: "#",
        src: project2
    },
];

const Portfolio = () => {
    return (
        <div id="portfolio" className="text-white bg-black bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">
            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold my-12 text-center'>
                My <span className='text-orange-400'>Projects</span>
            </h1>
            <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-32 space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12`}
                    >
                        <div className="space-y-4 max-w-[550px]">
                            <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                            <h2 className="text-4xl">{project.title}</h2>
                            <p className="text-lg text-white/70 break-words">{project.desc}</p>
                            <p className="text-xl text-orange-400 font-semibold">{project.devstack}</p>
                            <div className="flex justify-start items-center mt-4 space-x-4">
                                <a href={project.link} className="text-orange-400 hover:text-orange-600">
                                    <FaLink size={24} />
                                </a>
                                <a href={project.git} className="text-orange-400 hover:text-orange-600">
                                    <FaGithub size={24} />
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-4 md:mt-0">
                            <Image 
                                src={project.src} 
                                alt={project.title} 
                                className="h-[350px] w-[500px] object-cover border rounded border-grey-700" 
                                layout="intrinsic" // Ensures image is responsive
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;