import React, { useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import kids from "../img/kids.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { googleProvider, facebookProvider } from "../config/AuthMethod";
import socialMediaAuth from "../config/Auth";

const ModalWrapper = styled.div`
  width: 1200px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #1b1b1b;
  color: #fff;
  display: grid;
  grid-template-columns: 2fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  position: relative;
  top: -340px;
  left: 50px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #ddd;
  p {
    margin-bottom: 1rem;
  }
  button {
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: "Inter", sans-serif;
    &:hover {
      background-color: #23d997;
      color: white;
    }
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
const Container = styled.div`
  position: relative;
`;

const Social = styled.div`
  display: flex;
  button {
    width: 80px;
    height: 80px;
    text-align: center;
    text-decoration: none;
    color: #23d997;
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);
    margin: 0 30px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    transition: transform 0.5s;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      top: -90px;
      left: 0;
      background: #000;
      background: linear-gradient(-45deg, #ed1c94, #ffec17);
      position: absolute;
      transition: 0.5s;
    }

    &:hover::after {
      top: 0;
    }
    &:hover .social {
      color: #fff;
    }
    &:hover {
      transform: translateY(-10px);
    }
  }
  .social {
    position: relative;
    font-size: 45px;
    line-height: 80px;
    z-index: 10;
    transition: color 0.5s;
    top: 0px;
    left: -8px;
  }
`;

export const Modal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const loginClick = async(provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res)
  };

  return (
    <>
      {showModal ? (
        <Container>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={kids} alt="kids" />
              <ModalContent>
                <h1>Are you ready to join us?</h1>
                <p>Login with your social account.</p>
                <Social>
                  <button onClick={() => loginClick(facebookProvider)}>
                    <FontAwesomeIcon icon={faFacebook} className="social" />
                  </button>
                  <button onClick={() => loginClick(googleProvider)}>
                    <FontAwesomeIcon icon={faGoogle} className="social" />
                  </button>
                </Social>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Container>
      ) : null}
    </>
  );
};
