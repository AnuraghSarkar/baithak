import React from "react";

import Startup from "../components/Startup";
import Growth from "../components/Growth";
import Premium from "../components/Premium";
import Enterprise from "../components/Enterprise";

import { motion } from "framer-motion";
import { scrollReveal } from "../animation";
import styled from "styled-components";
import { UseScroll } from "../components/useScroll";

const Pricing = () => {
  const [element, controls] = UseScroll();

  return (
    <Exit
      exit="exit"
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <Startup />
      <Growth />
      <Premium />
      <Enterprise />
    </Exit>
  );
};
const Exit = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  flex: 1;
`;

export default Pricing;
