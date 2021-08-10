import React from "react";

import { motion } from "framer-motion";
import { PageAnimation } from "../animation";
import styled from "styled-components";

import Hero from "../components/Host";

function Landing() {
  return (
    <Exit exit="exit" variants={PageAnimation} initial="hidden" animate="show">
      <Hero />
    </Exit>
  );
}
const Exit = styled(motion.div)`
  /* display: flex; */
  justify-content: space-around;
  flex: 1;
`;

export default Landing;
