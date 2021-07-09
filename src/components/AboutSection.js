import React, { useState } from "react";
import { About, Description, Image, Hidden } from "../styles";
import video from "../img/video.jpg";
import { Modal } from "./Modal";
// Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

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
        <motion.button variants={fade} onClick={openModal}>
          Join Us
        </motion.button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Description>
      <Image>
        <motion.img variants={photAnim} src={video} alt="Anime Background" />
      </Image>
      <Wave />
    </About>
  );
};
export default AboutSection;
