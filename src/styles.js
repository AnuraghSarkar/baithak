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

export const HeaderElement = styled(motion.div)`
  min-height: 3.6rem;
  width: 100%;
  background-color: #ff8e00;
`;
export const HeaderText = styled(motion.div)`
  color: #ffffff;
  font-size: 1rem;
  padding-top: 0.9rem;
`;
export const LernMoreButton = styled(motion.div)`
  letter-spacing: 0.1rem;
  padding-top: 0.5rem;
`;
//navbar
export const NavbarElement = styled(motion.div)`
  background-color: transparent;
  margin-top: -45rem;
`;
export const JoinMeetingElement = styled(motion.div)`
  padding-top: 2rem;
  padding-left: 5rem;
  width: 25rem;
  color: #fff;
  font-weight: bold;
`;

export const HostMeetingElement = styled(motion.div)`
  padding-top: 2rem;
  padding-left: 5rem;
  width: 25rem;
  color: white;
  font-weight: bold;
`;
