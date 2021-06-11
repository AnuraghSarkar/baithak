import React from 'react';
import styled from 'styled-components';
// Import Icons 503w 704h 50 50
import goku from '../img/anime1.svg'
import onepiece from '../img/anime2.svg'
import sailor from '../img/anime3.svg'
import sasuke from '../img/anime4.svg'
// import anime2 from '../img/anime2.jpg'
import anime7 from '../img/anime7.jpg'
import { About, Description, Image } from '../styles'

const AnimeListSection = () => {
    return (
        <Services>
            <Description>
                <h2>Best <span>anime</span> recommendation.</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={goku} alt="anime" />
                            <h3>Fights</h3>
                        </div>
                        <p>Watch Some Epic Actions.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={sailor} alt="anime" />
                            <h3>Waifu</h3>
                        </div>
                        <p>Make some 2-D crush.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={onepiece} alt="anime" />
                            <h3>Adventure</h3>
                        </div>
                        <p>Got to know straw hats.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={sasuke} alt="anime" />
                            <h3>Stories</h3>
                        </div>
                        <p>Can't you cry enough.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={anime7} alt="Anime" />
            </Image>
        </Services>
    );
}

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    };
    p {
        width: 70%;
        padding: 2rem 0 4rem 0;
    }
`
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;

        }
    }
`

export default AnimeListSection;