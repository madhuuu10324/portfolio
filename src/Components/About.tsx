'use client'
import React from 'react'
import Image from 'next/image'
import aboutImg from '../assets/profilepic.png'
import book from '../assets/book.png'
import pc from '../assets/pc.png'
import card from '../assets/card.png'
import finance from '../assets/finance.png'

const About = () => {
  return (
    <div className='max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8' id='about'>

      <h1 className='text-white text-4xl sm:text-5xl md:text-6xl w-full text-center font-semibold p-4 mb-4'>
        About <span className='text-orange-400'>Me</span>
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-8 gap-6 place-items-center'>

        {/* Education Section */}
        <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={book} alt='book' className="w-auto h-[80px] sm:h-[100px] md:h-[130px]" />
            <div className='flex flex-col mt-4'>
              <h2 className='text-lg font-bold text-white/80'>Education</h2>
              <p className='text text-white/70 mt-2'>I'm a Pre-Final year student pursuing a degree in Computer Science and Engineering and my focus is on Full-stack Development.</p>
            </div>
          </div>
        </div>

        {/* Problem-Solving Section */}
        <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={finance} alt='finance' className="w-auto h-[80px] sm:h-[100px] md:h-[130px]" />
            <div className='flex flex-col mt-4'>
              <h2 className='text-lg font-bold text-white/80'>Problem-Solving</h2>
              <p className='text text-white/70 mt-2'>I approach challenges with a logical and systematic mindset.</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={card} alt='card' className="w-auto h-[80px] sm:h-[100px] md:h-[130px]" />
            <div className='flex flex-col mt-4'>
              <h2 className='text-lg font-bold text-white/80'>Experience</h2>
              <p className='text text-white/70 mt-2'>I have a diverse portfolio of projects.</p>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={pc} alt='pc' className="w-auto h-[80px] sm:h-[100px] md:h-[130px]" />
            <div className='flex flex-col mt-4'>
              <h2 className='text-lg font-bold text-white/80'>Technical Skills</h2>
              <p className='text text-white/70 mt-2'>As a Fullstack Developer, I specialize in ReactJs, NextJs, Tailwind CSS, and Django. My expertise extends to creating responsive websites.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About;