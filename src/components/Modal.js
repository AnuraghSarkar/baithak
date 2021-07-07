import React, { useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import kids from '../img/kids.jpg'


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
`

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
                <button>Join Now</button>
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
