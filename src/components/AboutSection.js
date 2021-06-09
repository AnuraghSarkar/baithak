import React from 'react'
import anime1 from '../img/anime1_.png';

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>You have to</h2>
                    </div>
                    <div className="hide">
                        <h2>watch <span>Anime</span> else</h2>
                    </div>
                    <div className="hide">
                        <h2>regret.</h2>
                    </div>
                </div>
                <p>Contact us for any anime questions or recommendation. We have professionals just to react out to you. </p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={anime1} alt="Anime Background" />
            </div>
        </div>
    );
}

export default AboutSection;