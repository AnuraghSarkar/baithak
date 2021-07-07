import styled from 'styled-components'
import { motion } from 'framer-motion'
// Styled Component
export const About = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    @media (max-width:1300px){
        display: block;
        padding: 2rem 2rem;
        text-align: center;
    }
`
export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    z-index: 2;
    h2 {
        font-weight: lighter;
    }
    @media (max-width:1300px){
        padding: 0;
        button {
            margin: 2rem 0 5rem 0;
        }
    }
`
export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
    z-index: 2;
`
export const Hidden = styled.div`
    overflow: hidden;
`

export const PriceTab = styled(motion.div)`
  min-height: 40rem;
  width: 20rem;
  text-align: center;
  background-color: #091013;
  /* padding: 5rem 10rem; */
  border-radius: 0.1rem;
`;
export const Title = styled(motion.div)`
  color: white;
  padding-top: 5rem;
`;
export const Price = styled(motion.div)`
  color: #44c98f;
`;
export const Info = styled(motion.div)`
  color: white;
`;
export const PriceTabPremium = styled(motion.div)`
  min-height: 50rem;
  width: 25rem;
  text-align: center;
  background-color: #fff;
  padding: 4.5rem 2rem;
  border-radius: 0.1rem;
  background: linear-gradient(
    180deg,
    #ffffff 41.31%,
    rgba(255, 255, 255, 0) 100%
  );
`;
export const Recommended = styled(motion.div)`
  min-height: 5rem;
`;
export const TitlePremium = styled(motion.div)`
  color: black;
  padding-top: 20px;
`;

export const InfoPremium = styled(motion.div)`
  color: black;
`;