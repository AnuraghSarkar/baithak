import React from "react";
import anime6 from "../img/anime6.jpg";
import { About, Description, Image, Hidden } from "../styles";
import video from "../img/video.jpg";
// Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hidden>
            <motion.h2 variants={titleAnimation}>Baithak is a video </motion.h2>
          </Hidden>
          <Hidden>
            <motion.h2 variants={titleAnimation}>
              conference app <span>Free</span> for
            </motion.h2>
          </Hidden>
          <Hidden>
            <motion.h2 variants={titleAnimation}>students.</motion.h2>
          </Hidden>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any questions or suggestion. We have professionals just
          to react out to you.{" "}
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photAnim} src={video} alt="Anime Background" />
      </Image>
      <Wave />
    </About>
  );
};
export default AboutSection;
