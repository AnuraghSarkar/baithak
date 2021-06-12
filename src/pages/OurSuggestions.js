import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import anime3 from '../img/anime3.jpg'
import anime4 from '../img/anime4.jpg'
import anime8 from '../img/anime8.jpg'

// Animation
import { motion } from 'framer-motion';
import { PageAnimation, fade, photAnim, lineAnimation, slider, sliderContainer } from '../animation';
import { Hidden } from '../styles'

const OurSuggestion = () => {
    return (
        <List exit='exit' variants={PageAnimation} initial='hidden' animate='show' style={{ background: "#ffffff" }}>
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Anime>
                <motion.h2 variants={fade}>Jujustu Kaisen</motion.h2>
                <motion.div className="line" variants={lineAnimation} ></motion.div>
                <Link to='/suggestion/jujutsu-kaisen'>
                    <Hidden>
                        <motion.img variants={photAnim} src={anime3} alt="Anime Name" />
                    </Hidden>
                </Link>
            </Anime>
            <Anime>
                <motion.h2>Demon Slayer</motion.h2>
                <motion.div className="line"></motion.div>
                <Link to='/suggestion/demon-slayer'>
                    <img src={anime4} alt="Anime Name" />
                </Link>
            </Anime>
            <Anime>
                <motion.h2>One Piece</motion.h2>
                <motion.div className="line"></motion.div>
                <Link to='/suggestion/one-piece'>
                    <img src={anime8} alt="Anime Name" />
                </Link>
            </Anime>
        </List>
    );
}

const List = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0;
    }
`
const Anime = styled.div`
    padding-bottom: 10rem;
    .line {
        height: .5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurSuggestion;