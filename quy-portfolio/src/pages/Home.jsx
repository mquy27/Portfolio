import React from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Project from '../components/Project'
import ContactMe from '../components/ContactMe'
import Hobby from '../components/Hobby'
import Footer from '../components/Footer'
const Home = () => {
    return (
        <>
            {/* <Preloader /> */}
            <div className="bg-gray-50 min-h-screen relative">
                <main className="relative z-0">
                    <Hero />
                    <AboutMe />
                    <Project />
                    <ContactMe />
                    <Hobby />
                    <Footer />
                </main>
            </div>
        </>
    )
}

export default Home
