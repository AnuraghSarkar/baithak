import React from "react";
// Animation
import { motion } from "framer-motion";
import {
  PageAnimation,
  titleAnimation,
  slider,
  sliderContainer,
  fade,
} from "../animation";
import styled from "styled-components";
import { Hidden } from "../styles";
import "../assets/css/main.css";
import { useState } from "react";
import firebase from "../config/firebase-config";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .firestore()
      .collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
        subject: subject,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
  };

  return (
    <ContactStyle
      exit="exit"
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Content>
        <motion.div variants={sliderContainer}>
          <Frame1 variants={slider}></Frame1>
          <Frame2 variants={slider}></Frame2>
          <Frame3 variants={slider}></Frame3>
          <Frame4 variants={slider}></Frame4>
        </motion.div>
        <div>
          <Title>
            <Hidden>
              <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
            </Hidden>
          </Title>
          <div>
            <Hidden>
              <Social variants={titleAnimation}>
                <Circle />
                <h2>Send Us A Message</h2>
              </Social>
            </Hidden>
            <Hidden>
              <Social variants={titleAnimation}>
                <Circle />
                <h2>Send an email.</h2>
              </Social>
            </Hidden>
            <Hidden>
              <Social variants={titleAnimation}>
                <Circle />
                <h2>Social Media</h2>
              </Social>
            </Hidden>
          </div>
        </div>

        <Contact1 variants={fade}>
          <ContactForm onSubmit={handleSubmit}>
            <ContactTile>Drop your queries</ContactTile>
            <WrapInput>
              <input
                className="input1"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="shadow-input1"></span>
            </WrapInput>

            <WrapInput>
              <input
                className="input1"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
              />
              <span className="shadow-input1"></span>
            </WrapInput>

            <WrapInput>
              <input
                className="input1"
                type="text"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <span className="shadow-input1"></span>
            </WrapInput>

            <WrapInput>
              <textarea
                className="input1"
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <span className="shadow-input1"></span>
            </WrapInput>

            <div className="container-contact1-form-btn">
              <button
                className="contact1-form-btn"
                style={{ background: loader ? "#ccc" : "##23D997" }}
              >
                <span>Send Email</span>
              </button>
            </div>
          </ContactForm>
        </Contact1>
      </Content>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: rgb(53, 53, 53);
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Circle = styled.div`
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

const Contact1 = styled(motion.div)`
  width: 54%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ContactForm = styled.form`
  width: 450px;
`;
const ContactTile = styled.span`
  display: block;
  font-family: Montserrat-ExtraBold;
  font-size: 24px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 44px;
`;
const WrapInput = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 20px;
`;

export default ContactUs;
