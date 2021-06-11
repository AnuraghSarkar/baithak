import React from 'react'
// Animation
import { motion } from 'framer-motion';
import { PageAnimation } from '../animation';

const ContactUs = () => {
    return (
        <motion.div exit="exit" variants={PageAnimation} initial='hidden' animate='show' style={{background:"#ffffff"}}>
            <h1>Contact Us</h1>
        </motion.div>
    );
}

export default ContactUs;