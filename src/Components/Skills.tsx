import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';

const skillIcons = [
    { icon: <FaHtml5 size={100} />, label: "HTML" },
    { icon: <FaCss3Alt size={100} />, label: "CSS" },
    { icon: <FaJsSquare size={100} />, label: "JavaScript" },
    { icon: <FaReact size={100} />, label: "React"},
    { icon: <FaReact size={100} />, label: "React"},
    { icon: <FaReact size={100} />, label: "React"},
];

const Skills = () => {
    return (
        <div className="bg-gradient-to-t from-black to-[#381a5f] py-32">
            <div className='text-white max-w-[950px] mx-auto p-8 text-center'>
                <h2 className='text-6xl font-bold mb-4'>What I Do</h2>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {skillIcons.map((skill, index) => (
                        <div 
                            key={index} 
                            className='h-[200px] w-[200px] flex flex-col justify-center items-center bg-white/10 p-4 rounded-xl transition-transform transform hover:scale-105' // Increased height and width
                        >
                            <div className="text-5xl"> {/* Adjusted icon size for better visibility */}
                                {skill.icon} 
                            </div>
                            <span className='text-lg mt-2'>{skill.label}</span> {/* Added margin to the label for spacing */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;