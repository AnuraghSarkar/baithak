import React from "react";
// Import Page Component
import { useContext } from "react";
import AboutSection from "../components/AboutSection";
import AnimeListSection from "../components/AnimeListSection";
import FaqSection from "../components/FaqSection";
import ScrollTop from "../components/ScrollTop";

import { UserContext } from "../store";
import Landing from "./Join";

// Animation
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";
const AboutUs = () => {
  const currentUser = useContext(UserContext);
  return (
    <motion.div
      exit="exit"
      variants={PageAnimation}
      initial="hidden"
      animate="show"
    >
      {currentUser ? (
        <Landing />
      ) : (
        <>
          <AboutSection />
          <AnimeListSection />
          <FaqSection />
          <ScrollTop />
        </>
      )}
    </motion.div>
  );
};

export default AboutUs;
//herum k hunxa
