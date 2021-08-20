import React from "react";
import styled from "styled-components";
// Import Icons 503w 704h 50 50
import free from "../img/free.svg";
import domestic from "../img/domestic.svg";
import easy from "../img/easy.svg";
import quality from "../img/quality.svg";
// import anime2 from '../img/anime2.jpg'
import quiet from "../img/quiet.jpg";
import { About, Description, Image } from "../styles";
import { UseScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const ServiceSection = () => {
  const [element, controls] = UseScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          Features <span>we</span> serve.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={free} alt="anime" />
              <h3>Free</h3>
            </div>
            <p>Free Education Plan.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={domestic} alt="anime" />
              <h3>Domestic</h3>
            </div>
            <p>First Nepali Platfrom.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={quality} alt="anime" />
              <h3>Quality</h3>
            </div>
            <p>Advanced Collaboration</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={easy} alt="anime" />
              <h3>Accessible</h3>
            </div>
            <p>Access from Anywhere.</p>
          </Card>
        </Cards>

      </Description>
      <Image>
        <img src={quiet} alt="Anime" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
    img {
      height: 80px;
    }
  }
`;

export default ServiceSection;
