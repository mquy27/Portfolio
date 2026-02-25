import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Project from '../components/Project'
import Experience from '../components/Experience'
import ContactMe from '../components/ContactMe'
import Hobby from '../components/Hobby'
const Home = () => {
    return (
        <>
            {/* <Preloader /> */}
            <div className="bg-gray-50 min-h-screen relative">
                <div className="relative z-20">
                    <Navbar />
                </div>
                <main className="relative z-0">
                    <Hero />
                    <AboutMe />
                    <Project />
                    <Experience />
                    <ContactMe />
                    <Hobby />
                </main>
            </div>
        </>
    )
}

export default Home
