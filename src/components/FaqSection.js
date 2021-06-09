import React from 'react'

const FaqSection = () => {
    return (
        <div className="faq">
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>Which Anime to Watch?</h4>
                <div className="answer">
                    <p>It generally lies on what you want to watch.</p>
                    <p>It is not easy to narrow down to only 30 anime and rank them.</p>
                </div>
            </div>
            <div className="question">
                <h4>Is anime good to watch?</h4>
                <div className="answer">
                    <p>If you have an ocular problem, then you can't. </p>
                    <p>But if you want it is worthwhile and will be successful in sparking your interest. </p>
                </div>
            </div>
            <div className="question">
                <h4>Does watching anime makes you great?</h4>
                <div className="answer">
                    <p>Most of the anime teach you what life is.</p>
                    <p>A little insight from some one who has dabbled in the dark art of Japanese animation.</p>
                </div>
            </div>
            <div className="question">
                <h4>Is watching anime always good?</h4>
                <div className="answer">
                    <p>The addiction to it can be very harmful to you.</p>
                    <p>You'll want to disappear from the real world and go into the anime world.</p>
                </div>
            </div>
            
        </div>
    );
}

export default FaqSection;