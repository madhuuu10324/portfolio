"use client";
import Image from 'next/image';
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilpic from "../assets/profilepic.png";

const Hero = () => {
  return (
    <div
      className="py-24 relative overflow-clip"
      style={{
        background: "linear-gradient(to bottom, #000, #2B1942 50%, #8F5C55 60%, #ec8a6d 70%, #dbaf6e 100%)",
      }}
    >
      <div
        className="absolute rounded-[50%] w-[3000px] h-[3000px] top-[550px] left-[50%] -translate-x-1/2"
        style={{
          background: "radial-gradient(closest-side, #000 80%, #2B1942)",
        }}
      ></div>

      <div className='relative'>
        <div className="text-8xl font-bold text-center text-white">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1>Madhu</h1>
        </div>

        <motion.div
          className='hidden md:block absolute left-[280px] top-[170px]'
          drag>
          <Image 
            src={cursor}
            height="190"
            width="190"
            alt="cursor"
            className=''
            draggable="false"
          />
        </motion.div>

        <motion.div
          className='hidden md:block absolute left-[220px] top-[170px]'
          drag>
          <Image 
            src={lightning}
            height="190"
            width="190"
            alt="message"
            className=''
            draggable="false"
          />
        </motion.div>

        <p className='text-center text-xm max-w-[500px] mx-auto mt-8 text-white/80'>
          I&apos;m a passionate Full Stack Developer currently pursuing my studies. I create dynamic, user-centric web applications with expertise across both front-end and back-end development.
        </p>

        <Image
          src={profilpic}
          alt="profile picture"
          className='h-auto w-auto mx-auto'
        />
      </div>
    </div>
  );
};

export default Hero;