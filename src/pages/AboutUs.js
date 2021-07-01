import React from 'react';
// Import Page Component
import AboutSection from '../components/AboutSection'
import AnimeListSection from '../components/AnimeListSection'
import FaqSection from '../components/FaqSection'
import  ScrollTop  from '../components/ScrollTop'


// Animation
import { motion } from 'framer-motion';
import { PageAnimation } from '../animation';
const AboutUs = () => {
    return (
        <motion.div exit="exit" variants={PageAnimation} initial='hidden' animate='show'>
            <AboutSection />
            <AnimeListSection />
            <FaqSection />
            <ScrollTop />
        </motion.div>
    );
}

export default AboutUs;
//herum k hunxa