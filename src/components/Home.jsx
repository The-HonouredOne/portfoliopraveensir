import React from 'react'
import Hero from './Hero'
import AboutSection from './AboutSection'
import Portfolio from './Portfolio'
import BlogAndServices from './Blog'
import ContactAndFooter from './ContactandFooter'
import HappyClient from './HappyClient'
import Testimonial from './Testimonial'
import Experience from './Experience'
import ExperienceSlider from './ExperienceSlider'
import FeaturedIn from './FeaturedIn'
import SpeakerAt from './SpeakerAt'

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutSection />
            <ExperienceSlider />
            <FeaturedIn/>
            <SpeakerAt/>
            {/* <Portfolio /> */}
            {/* <BlogAndServices /> */}
            <HappyClient />
            <Testimonial />
            <ContactAndFooter />
            {/* <Experience /> */}
        </div>
    )
}

export default Home
