import React from 'react'
import joinmeet from '../img/bg.jpg'

import Typical from 'react-typical'

import {
  HeroBackground,
  HeroImage,
  HeroTitle,
  TypicalTitle,
  JoinOrHost,
  JoinMeeting,
  JoinTitle,
  JoinText,
  Or,
  OrTitle,
  HostMeeting,
  HostTitle,
  HostText,
  JoinMeetingElement,
  HostMeetingElement,
  JoinButton,
  LogButton,
} from "../styles";


const Hero = ()=> {
    return (
      <HeroBackground>
        <HeroImage src={joinmeet} alt="ok"></HeroImage>
        <HeroTitle>Just join to</HeroTitle>
        <TypicalTitle>
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "CLOSE A DEAL",
              2000,
              "DELIGHT A CUSTOMER",
              2000,
              "LEAP TALL BUILDINGS ",
              2000,
              "LAUNCH A PRODUCT",
              2000,
              "TRAIN A TEAM",
              2000,
              "SHOW WORK WHO’S BOSS",
              2000,
              "DESIGN A SNEAKER",
              2000,
              "MAKE A DIFFERENCE",
              2000,
              "GET #*%! DONE",
              2000,
            ]}
          />
        </TypicalTitle>

        <JoinOrHost>
          <HostMeeting>
            <HostMeetingElement>
              <HostTitle>Host a Meeting</HostTitle>
              <HostText>
                Want to connect to the other members? Host a meeting.
              </HostText>
              <LogButton>Host Meeting</LogButton>
            </HostMeetingElement>
          </HostMeeting>

          <Or>
            <OrTitle>OR</OrTitle>
          </Or>

          <JoinMeeting>
            <JoinMeetingElement>
              <JoinTitle>Join a Meeting</JoinTitle>
              <JoinText>
                Did someone sent you a meeting code? Please enter it here to
                join a meeting.
              </JoinText>
              <JoinButton>Join Meeting</JoinButton>
            </JoinMeetingElement>
          </JoinMeeting>
        </JoinOrHost>
      </HeroBackground>
    );
}

export default Hero
