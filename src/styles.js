import styled from "styled-components";
import { motion } from "framer-motion";
// Styled Component
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0 5rem 0;
    }
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  z-index: 2;
`;
export const Hidden = styled.div`
  overflow: hidden;
`;

//hero.js page styled component
export const HeroBackground = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
`;
export const HeroImage = styled(motion.img)`
  width: 100%;
  max-height: 90vh;
  object-fit: cover;
`;
export const HeroTitle = styled(motion.div)`
  margin-top: 5rem;
  color: #23d997;
  position: absolute;
  text-align: center;
  width: 60rem;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 7rem;
`;
export const TypicalTitle = styled(motion.div)`
  position: absolute;
  margin-top: 15rem;
  letter-spacing: 1rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
  font-size: 7rem;
`;
export const JoinOrHost = styled(motion.div)`
  position: absolute;
  margin-top: 30rem;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex: 1;
`;
export const HostMeeting = styled(motion.div)`
  z-index: 1;
  text-align: center;
  width: 30rem;
  height: 14rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
export const HostMeetingElement = styled(motion.div)`
  padding-top: 2rem;
  padding-left: 5rem;
  width: 25rem;
  color: white;
  font-weight: bold;
`;
export const HostTitle = styled(motion.div)`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 900;
`;
export const HostText = styled(motion.div)`
  margin-top: 0.3rem;
`;

export const LogButton = styled(motion.button)`
  text-transform: uppercase;
  letter-spacing: 0.01rem;
  border: none;
  font-size: 1.4rem;
  color: #fff;
  font-weight: 900;
  margin-top: 1.4rem;
  padding: 0.5rem;
  background-color: #ff8e00;
  width: 18rem;
  height: 2.8rem;
  border-radius: 0.5rem;
`;

export const Or = styled(motion.div)`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 4.7rem;
  color: #666666;
  width: 5rem;
  height: 5rem;
  background: rgba(255, 255, 255, 255);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
export const OrTitle = styled(motion.div)`
  font-size: 2.7rem;
  font-weight: 700;
  padding-top: 1rem;
  padding-left: 0.35rem;
`;

export const JoinMeeting = styled(motion.div)`
  z-index: 1;
  text-align: center;
  width: 30rem;
  height: 14rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
export const JoinMeetingElement = styled(motion.div)`
  padding-top: 2rem;
  padding-left: 5rem;
  width: 25rem;
  color: #fff;
  font-weight: bold;
`;
export const JoinTitle = styled(motion.div)`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 900;
`;
export const JoinText = styled(motion.div)`
  margin-top: 0.3rem;
`;

export const JoinButton = styled(motion.button)`
  text-transform: uppercase;
  letter-spacing: 0.01rem;
  border: none;
  font-size: 1.4rem;
  color: #fff;
  font-weight: 900;
  margin-top: 1.4rem;
  padding: 0.5rem;
  background-color: #24b4d8;
  width: 18rem;
  height: 2.8rem;
  border-radius: 0.5rem;
`;
