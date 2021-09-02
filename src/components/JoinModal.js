import React, { useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const ModalWrapper = styled.div`
  width: 500px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #1b1b1b;
  color: #fff;
  display: grid;
  grid-template-columns: 2fr 1fr;
  position: relative;
  z-index: 10000;
  border-radius: 10px;
  position: relative;
  top: -450px;
  left: -65px;
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

const ContactForm = styled.div`
  width: 400px;
  position: absolute;
  left: 10%;
`;
const ContactTile = styled.span`
  display: block;
  font-family: Montserrat-ExtraBold;
  font-size: 24px;
  color: #ffffff;
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
export const JoinModal = ({ showJoinModal, setshowJoinModal }) => {
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showJoinModal ? 1 : 0,
    transform: showJoinModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showJoinModal) {
        setshowJoinModal(false);
      }
    },
    [setshowJoinModal, showJoinModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  const [inputAddress, setInputAddress] = useState(""); // '' is the initial state value

  return (
    <>
      {showJoinModal ? (
        <Container>
          <animated.div style={animation}>
            <ModalWrapper showJoinModal={showJoinModal}>
              <ModalContent>
                <ContactForm>
                  <ContactTile>Room URL</ContactTile>
                  <WrapInput>
                    <input
                      className="input1"
                      type="text"
                      name="name"
                      placeholder="URL ADDRESS"
                      value={inputAddress}
                      onChange={(e) => setInputAddress(e.target.value)}
                    />
                    <span className="shadow-input1"></span>
                  </WrapInput>

                  <div className="container-contact1-form-btn">
                    <button className="contact1-form-btn">
                      <span>
                        <a href={inputAddress} target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration:'none'}}>
                          Enter Room
                        </a>
                      </span>
                    </button>
                  </div>
                </ContactForm>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setshowJoinModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Container>
      ) : null}
    </>
  );
};
