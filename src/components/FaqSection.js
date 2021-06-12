import React from 'react'
import styled from 'styled-components'
import { About } from '../styles'
import Toggle from './Toggle'
import { AnimateSharedLayout } from 'framer-motion';
import { UseScroll } from './useScroll';
import { scrollReveal } from '../animation';


const FaqSection = () => {
    const [element, controls] = UseScroll()
    return (
        <Faq variants={scrollReveal} ref={element} animate={controls} initial='hidden'>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title='Which Anime to Watch?'>
                    <div className="answer">
                        <p>It generally lies on what you want to watch.</p>
                        <p>It is not easy to narrow down to only 30 anime and rank them.</p>
                    </div>
                </Toggle>
                <Toggle title='Is anime good to watch?'>
                    <div className="answer">
                        <p>If you have an ocular problem, then you can't. </p>
                        <p>But if you want it is worthwhile and will be successful in sparking your interest. </p>
                    </div>
                </Toggle>
                <Toggle title='Does watching anime makes you great?'>
                    <div className="answer">
                        <p>Most of the anime teach you what life is.</p>
                        <p>A little insight from some one who has dabbled in the dark art of Japanese animation.</p>
                    </div>
                </Toggle>
                <Toggle title='Is watching anime always good?'>
                    <div className="answer">
                        <p>The addiction to it can be very harmful to you.</p>
                        <p>You'll want to disappear from the real world and go into the anime world.</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
}
const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: .2rem;
        margin: 2rem 0;
        width: 100%;
    }
    .question {
        padding: 3rem 0;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0;
        p {
            padding: 1rem 0;
        }
    }
`

export default FaqSection;