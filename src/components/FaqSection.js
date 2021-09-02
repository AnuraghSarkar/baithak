import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { UseScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = UseScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="What is Baithak?">
          <div className="answer">
            <p>
              Baithak is a cloud-based video conferencing service you can use to
              virtually meet with others .
            </p>
            <p>
              Baithak is an essential tool for small-, medium-, and large-sized
              teams who want to keep in touch and continue their daily workflows
              with minimal disruption.
            </p>
          </div>
        </Toggle>
        <Toggle title="Is Baithak Free?">
          <div className="answer">
            <p>
              Host unlimited one-on-one or Group video conferences meetings with
              baithak absolutely free.
            </p>
            <p>
              Experience the rich feature of baithak as screen sharing,
              recording, changing backgrounds and much more...
            </p>
          </div>
        </Toggle>
        <Toggle title="Is baithak safe and secure to you?">
          <div className="answer">
            <p>It is most secured as it uses end-to-end encryption.</p>
            <p>
              The web browser version gets security enhancements faster and
              "sits in a sandbox" to limit security problems.
            </p>
          </div>
        </Toggle>
        <Toggle title="How can you use baithak?">
          <div className="answer">
            <p>Open baithak in your favrouite browser then join us through your mail.</p>
            <p>Enter the required credentials and then enjoy the online meetings.</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
