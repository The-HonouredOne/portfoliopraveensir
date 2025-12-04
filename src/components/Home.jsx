import React from 'react'
import Hero from './Hero'
import AboutSection from './AboutSection'
import Portfolio from './Portfolio'
import BlogAndServices from './Blog'
import ContactAndFooter from './ContactandFooter'
import HappyClient from './HappyClient'
import Testimonial from './Testimonial'
import ExperienceSlider from './ExperienceSlider'
import FeaturedIn from './FeaturedIn'
import SpeakerAt from './SpeakerAt'
import ImageGallery from './ImageGallery'

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
            <ImageGallery />
            <HappyClient />
            <Testimonial />
            <ContactAndFooter />
            {/* <Experience /> */}
        </div>
    )
}

export default Home
