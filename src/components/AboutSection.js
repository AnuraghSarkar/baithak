import React from 'react'
import anime6 from '../img/anime6.jpg';
import { About, Description, Image, Hidden } from '../styles'
// Framer Motion
import { motion } from 'framer-motion';
import { titleAnimation, fade, photAnim } from '../animation'
import Wave from './Wave'

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hidden>
                        <motion.h2 variants={titleAnimation}>You have to</motion.h2>
                    </Hidden>
                    <Hidden>
                        <motion.h2 variants={titleAnimation}>watch <span>Anime</span> else</motion.h2>
                    </Hidden>
                    <Hidden>
                        <motion.h2 variants={titleAnimation}>regret.</motion.h2>
                    </Hidden>
                </motion.div>
                <motion.p variants={fade}>Contact us for any anime questions or recommendation. We have professionals just to react out to you. </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photAnim} src={anime6} alt="Anime Background" />
            </Image>
            <Wave />
        </About>
    );
}
export default AboutSection;