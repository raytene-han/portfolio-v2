import { useRef } from "react";
import { useInView } from "framer-motion";

import { Title } from "../styledComponents/textComponents";
import { StyledSectionLeft } from "../styledComponents/cardComponents";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const StyledContactSection = styled.section`
  margin-bottom: 1em;
  text-align: right;
  color: var(--dark);
  height: fit-content;
  padding: 0.5em;
  width: 704px;

  h1 {
    text-align: left;
  }

  p {
    margin: 0;
  }

  a {
    color: var(--darkest);
    margin: 0 0.5em;
    font-size: 1.5em;
  }

  a:hover {
    color: var(--darkeraccent);
  }

  a.attribution {
    font-size: 0.5em;
    color: var(--dark);
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
    <StyledSectionLeft
      ref={ref}
      style={scrollIntoView}>
      <StyledContactSection>
        <Title> Connect with Me </Title>
        <a href="https://linkedin.com/in/raytene-han" className="social">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/raytene-han" className="social">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <p>Email coming soon!</p>
      </StyledContactSection>
    </StyledSectionLeft>
  );
}



export default Contact;