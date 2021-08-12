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
              3000,
              "DELIGHT A CUSTOMER",
              3000,
              "LEAP TALL BUILDINGS ",
              3000,
              "LAUNCH A PRODUCT",
              3000,
              "TRAIN A TEAM",
              3000,
              "SHOW WORK WHO’S BOSS",
              3000,
              "DESIGN A SNEAKER",
              3000,
              "MAKE A DIFFERENCE",
              3000,
              "GET #*%! DONE",
              3000,
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
