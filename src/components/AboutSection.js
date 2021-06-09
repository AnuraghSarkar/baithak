import React from 'react'
import anime6 from '../img/anime6.jpg';
// Styles
import styled from 'styled-components'
import {About, Description, Image, Hidden} from '../styles'

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hidden>
                        <h2>You have to</h2>
                    </Hidden>
                    <Hidden>
                        <h2>watch <span>Anime</span> else</h2>
                    </Hidden>
                    <Hidden>
                        <h2>regret.</h2>
                    </Hidden>
                </div>
                <p>Contact us for any anime questions or recommendation. We have professionals just to react out to you. </p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={anime6} alt="Anime Background" />
            </Image>
        </About>
    );
}
export default AboutSection;