import React from 'react';
// Import Icons 503w 704h 50 50
import goku from '../img/anime1.svg'
import sailor from '../img/anime2.svg'
import onepiece from '../img/anime3.svg'
import sasuke from '../img/anime4.svg'
// import anime2 from '../img/anime2.jpg'
import anime4 from '../img/anime4_.jpg'


const AnimeListSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>Best <span>anime</span> recommendation.</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={goku} alt="anime" />
                            <h3>Fights</h3>
                        </div>
                        <p>Watch Some Epic Actions.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={sailor} alt="anime" />
                            <h3>Waifu</h3>
                        </div>
                        <p>Make some 2-D crush.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={onepiece} alt="anime" />
                            <h3>Adventure</h3>
                        </div>
                        <p>Got to know straw hats.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={sasuke} alt="anime" />
                            <h3>Stories</h3>
                        </div>
                        <p>Can't you cry enough.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={anime4} alt="Anime" />
            </div>
        </div>
     );
}
 
export default AnimeListSection;