import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";

import { StyledSectionLeft } from "../styledComponents/cardComponents";
import { Title, Subtitle } from "../styledComponents/textComponents";
import "./Introduction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


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
      <main className="intro-section">
        <div className="intro-text">
          <Title> Hi, I'm Raytene. </Title>
          <Subtitle>Full stack developer. Cat enthusiast.</Subtitle>
          <p>I'm a full stack web developer with a background in structural engineering.</p>
          <div>
          <Link to="/files/myfile.pdf" target="_blank" download className="resume-button">
              <p>Download Resume</p>
              <FontAwesomeIcon icon={faCloudArrowDown} />
          </Link>
          <Link to="https://linkedin.com/in/raytene-han" className="social">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link to="https://linkedin.com/in/raytene-han" className="social">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          </div>
        </div>
        <img className="portrait" src="/IMG_0225.jpeg" alt="avatar" />
      </main>
    </StyledSectionLeft>
  );
}

export default Introduction;