import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import anime3 from '../img/anime3.jpg'
import anime4 from '../img/anime4.jpg'
import anime8 from '../img/anime8.jpg'

// Animation
import { motion } from 'framer-motion';
import { PageAnimation } from '../animation';

const OurSuggestion = () => {
    return (
        <List exit='exit' variants={PageAnimation} initial='hidden' animate='show' style={{ background: "#ffffff" }}>
            <Anime>
                <h2>Jujustu Kaisen</h2>
                <div className="line"></div>
                <Link to='/suggestion/jujutsu-kaisen'>
                    <img src={anime3} alt="Anime Name" />
                </Link>
            </Anime>
            <Anime>
                <h2>Demon Slayer</h2>
                <div className="line"></div>
                <Link to='/suggestion/demon-slayer'>
                    <img src={anime4} alt="Anime Name" />
                </Link>
            </Anime>
            <Anime>
                <h2>One Piece</h2>
                <div className="line"></div>
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
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

export default OurSuggestion;