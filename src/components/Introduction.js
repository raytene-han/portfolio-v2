import { useRef } from "react";
import { useInView } from "framer-motion";

import styled from "styled-components";

import { StyledSectionLeft } from "../styledComponents/cardComponents";
import { Title } from "../styledComponents/textComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const StyledIntroSection = styled.main`
  display: flex;
  flex-direction: row;

  h3 {
    font-size: clamp(1.2rem, 1.0224rem + 0.7401vw, 1.5rem);
    text-align: left;
    color: var(--dark);
    display: block;
    margin-top: 0;
    margin-bottom: 0.5em;
  }

  article {
    margin: 0 2em
  }

  img {
    width: 12em;
    height: 16em;
    object-fit: cover;
    position: relative;
    top: 3em;
    border-radius: 10px;
    box-shadow: 10px 10px var(--accent);
  }

  .resume-button {
    background: var(--accent);
    padding: 0.5em 1em;
    margin: 1em 0;
    border-radius: 2em;
    display: flex;
    align-items: center;
    border: none;
    color: var(--darkest);
    cursor: pointer;
    text-decoration: none;
    width: fit-content;
  }

  .resume-button:hover {
    background: var(--dark);
    color: var(--accent);
  }

  .resume-button:active {
    transform: translate(0, 4px);
  }
  a p {
    margin: 0 0.5em;
  }

  .social {
    align-items: center;
    font-size: 1.5em;
    margin: 0 0 0 1em;
    color: var(--darkest);
  }

  .social:hover {
    color: var(--accent);
  }

  @media (max-width: 420px) {
    flex-direction: column;
  }

  @media (max-width: 540px) {
    .wide {
      display: none;
    }
    .narrow {
      top: 0;
    }
  }

  @media (min-width: 540px) {
    .narrow {
      display: none;
    }
  }
`;

function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollIntoView = {
    transform: isInView ? "none" : "translateY(50px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"
  };

  return (
    <StyledSectionLeft id="homepage"
      ref={ref}
      style={scrollIntoView}
    >
      <StyledIntroSection>
        <article>
          <Title>Hi, I'm Raytene.</Title>
          <h3>Full stack developer. Cat enthusiast.</h3>
          <p>I'm a full stack web developer with a background in structural engineering.</p>
          <div>
            <img className="narrow" src="/raytene.jpeg" alt="Raytene Han" />
            <a href="/Raytene_Han_Resume_2022.pdf" target="_blank" download className="resume-button">
              <p>Download Resume</p>
              <FontAwesomeIcon icon={faCloudArrowDown} />
            </a>
            <a href="https://linkedin.com/in/raytene-han" className="social">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/raytene-han" className="social">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </article>
        <img className="wide" src="/raytene.jpeg" alt="Raytene Han" />
      </StyledIntroSection>
    </StyledSectionLeft>
  );
}

export default Introduction;