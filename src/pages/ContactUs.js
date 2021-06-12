import React from 'react'
// Animation
import { motion } from 'framer-motion';
import { PageAnimation, titleAnimation } from '../animation';
import styled from 'styled-components';
import { Hidden } from '../styles';

const ContactUs = () => {
    return (
        <ContactStyle exit="exit" variants={PageAnimation} initial='hidden' animate='show' style={{ background: "#ffffff" }}>
            <Title>
                <Hidden>
                    <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
                </Hidden>
            </Title>
            <div>
                <Hidden>
                    <Social variants={titleAnimation}>
                        <Circle>
                            <h2>Send message for otakus</h2>
                        </Circle>
                    </Social>
                </Hidden>
                <Hidden>
                    <Social variants={titleAnimation}>
                        <Circle>
                            <h2>Contact Senpai</h2>
                        </Circle>
                    </Social>
                </Hidden>
                <Hidden>
                    <Social variants={titleAnimation}>
                        <Circle>
                            <h2>Social Accounts</h2>
                        </Circle>
                    </Social>
                </Hidden>
            </div>
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color:#353535;
    min-height: 90vh;
    @media (max-width:1500px){
        padding: 2rem;
        font-size: 1rem;
    }
`
const Title = styled.div`
   margin-bottom : 4rem;
   color:black;
    @media (max-width:1500px){
        margin-top:5rem;
    }
`
const Circle = styled.div`
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    background: #353535;
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
`


export default ContactUs;