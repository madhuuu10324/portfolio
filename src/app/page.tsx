import Hero from "@/Components/Hero";
import NavBar from "@/Components/NavBar";
import Image from "next/image";
import About from "@/Components/About";
import Portfolio from "@/Components/Portfolio";
import Skills from "@/Components/Skills";
import Contact from '@/Components/Contact'
import Footer from '@/Components/Footer'

export default function Home() {
  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <Portfolio />
    <Skills />
    <Contact />
    <Footer />
    </>
  );
}
