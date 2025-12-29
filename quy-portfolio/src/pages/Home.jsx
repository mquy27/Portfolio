import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Lanyard from '../components/Lanyard'
import Experience from '../components/Experience'
import ContactMe from '../components/ContactMe'
import Hobby from '../components/Hobby'
import Preloader from '../components/Preloader'
const Home = () => {
    return (
        <>
            {/* <Preloader /> */}
            <div className="bg-gray-50 min-h-screen relative">
                {/* <div className="absolute top-0 left-0 w-full h-full z-10 hidden md:hidden lg:block pointer-events-none">
                    <Lanyard position={[-2, 0, 15]} gravity={[0, -40, 0]} />
                </div> */}
                <div className="relative z-20">
                    <Navbar />
                </div>
                <main className="relative z-0">
                    <Hero />
                    <AboutMe />
                    <Experience />
                    <ContactMe />
                    <Hobby />
                </main>
            </div>
        </>
    )
}

export default Home
