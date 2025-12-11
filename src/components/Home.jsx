import Hero from './Hero'
import AboutSection from './AboutSection'

import ContactAndFooter from './ContactandFooter'
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
          
            <ImageGallery />

           
            
            <Testimonial />
            <ContactAndFooter />
           
        </div>
    )
}

export default Home
