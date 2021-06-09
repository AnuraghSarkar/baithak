import React from 'react'
import styled from 'styled-components'
import { About } from '../styles'

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>Which Anime to Watch?</h4>
                <div className="answer">
                    <p>It generally lies on what you want to watch.</p>
                    <p>It is not easy to narrow down to only 30 anime and rank them.</p>
                </div>
                <div className="faq-line"></div>
            </div>

            <div className="question">
                <h4>Is anime good to watch?</h4>
                <div className="answer">
                    <p>If you have an ocular problem, then you can't. </p>
                    <p>But if you want it is worthwhile and will be successful in sparking your interest. </p>
                </div>
                <div className="faq-line"></div>

            </div>
            <div className="question">
                <h4>Does watching anime makes you great?</h4>
                <div className="answer">
                    <p>Most of the anime teach you what life is.</p>
                    <p>A little insight from some one who has dabbled in the dark art of Japanese animation.</p>
                </div>
                <div className="faq-line"></div>

            </div>
            <div className="question">
                <h4>Is watching anime always good?</h4>
                <div className="answer">
                    <p>The addiction to it can be very harmful to you.</p>
                    <p>You'll want to disappear from the real world and go into the anime world.</p>
                </div>
            </div>
            
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