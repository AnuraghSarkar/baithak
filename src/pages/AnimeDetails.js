import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { AnimeState } from '../AnimeState'
import { motion } from 'framer-motion';
import { PageAnimation } from '../animation';
const AnimeDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [animes] = useState(AnimeState);
    const [anime, setAnime] = useState(null);

    // use Effect
    useEffect(() => {
        const currentAnime = animes.filter((stateAnime) => stateAnime.url === url)
        setAnime(currentAnime[0])
    }, [animes, url]);

    return (
        <>
            {anime && (
                <Details exit="exit" variants={PageAnimation} initial='hidden' animate='show' >
                    <Headline>
                        <h2>{anime.title}</h2>
                        <img src={anime.mainImg} alt="Anime " />
                    </Headline>
                    <Awards>
                        {anime.awards.map((award) => (
                            <Award title={award.title} description={award.description} key={award.title} />
                        ))}
                    </Awards>
                    <ImageDisplay>
                        <img src={anime.secondaryImg} alt="Anime" />
                    </ImageDisplay>
                </Details>
            )}
        </>
    );
};
const Details = styled(motion.div)`
    color: white;
`
const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top:10%;
        left: 50%;
        transform: translate(-50%,-10%);
    }
    img{
      width:100%;
      height: 70vh;
      object-fit: cover;
    }
`
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items:center;
    justify-content: space-around;
`
const AwardStyle = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 70%;
        background: #23d997;
        height: .5rem;
        margin: 1rem 0;
    }
    p {
        padding: 2rem 0;
    }
`
const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`
// Award Component
const Award = ({ title, description }) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    );
};

export default AnimeDetail;