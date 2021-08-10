import React from 'react'
import joinmeet from '../img/bg.jpg'

import Typical from 'react-typical'

import {JoinMeetingElement, HostMeetingElement} from '../styles';


const Hero = ()=> {
    return (
        
        <div className="hero-background">           
            <img className="background-image" src = {joinmeet} alt="Kids"/> 
            <h1 class="hero-title">Just join to  
            </h1>
            <h1 class="typical-title">
            <Typical
            loop={Infinity}
            steps={[
                'CLOSE A DEAL',2000,
                'DELIGHT A CUSTOMER',2000,
                'LEAP TALL BUILDINGS ',2000,
                'LAUNCH A PRODUCT',2000,
                'TRAIN A TEAM',2000,
                'SHOW WORK WHO’S BOSS',2000,
                'DESIGN A SNEAKER',2000,
                'MAKE A DIFFERENCE',2000,
                'GET #*%! DONE',2000
            ]}
            />
            </h1>

            <ul class ="join-or-host">
            <li class="host-meeting">
                <HostMeetingElement>
                    <h2 class="title-host">Host a Meeting</h2>
                    <p class="host-text">Start your video conference now.</p>
                    <button class="log-btn">Log In</button>
                </HostMeetingElement>
            </li>
            <li class="or"><h2 class="or-title">OR</h2></li>

            <li class="join-meeting">
                <JoinMeetingElement>
                    <h2 class="title-join">Join a Meeting</h2>
                    <p class="join-text">Did someone send you a meeting code? Please enter it here to join a meeting.</p>
                    <button class="join-btn">Join Meeting</button>
                </JoinMeetingElement>
            </li>
            
            </ul>   
        </div>
    )
}

export default Hero
