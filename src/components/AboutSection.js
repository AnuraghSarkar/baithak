import React from 'react'
import anime6 from '../img/anime6.jpg';
// Styles
import styled from 'styled-components'


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

// Styled Component
const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`
const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`
const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`
const Hidden = styled.div`
    overflow: hidden;
`
export default AboutSection;