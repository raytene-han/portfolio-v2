import { useRef } from "react";
import { useInView } from "framer-motion";

import { Title } from "../styledComponents/textComponents";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const StyledContactSection = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1em;
  text-align: right;
  color: var(--dark);
  height: fit-content;
  padding: 0.5em;
  width: 446px;

  h1 {
    text-align: left;
  }

  div {
    text-align: center;
  }
  p {
    margin: 0;
  }

  a {
    color: var(--darkest);
    margin: 0 0.5em;
    font-size: 2em;
  }

  a:hover {
    color: var(--darkeraccent);
  }

  @media (max-width: 496px) {
    width: 90%;
  }
`;

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollIntoView = {
    transform: isInView ? "none" : "translateY(100px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"
  };

  return (

    <StyledContactSection
      ref={ref}
      style={scrollIntoView}>
      <Title> Connect with Me </Title>
      <div>
        <a href="https://linkedin.com/in/raytene-han" className="social">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/raytene-han" className="social">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:hello@raytene.me">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </StyledContactSection>

  );
}



export default Contact;