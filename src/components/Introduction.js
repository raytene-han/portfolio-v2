import { useRef } from "react";
import { useInView } from "framer-motion";

import { StyledSectionLeft } from "../styledComponents/cardComponents";
import { Title, Subtitle } from "../styledComponents/textComponents";
import "./Introduction.css";


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
    <div className="intro-section">
      <div className="intro-text">
        <Title> Hi, I'm Raytene. </Title>
        <Subtitle>Full stack developer. Cat enthusiast.</Subtitle>
        <p>I'm a full stack web developer </p>
      </div>
      <img className="portrait" src="/IMG_0225.jpeg" alt="avatar" />
    </div>
  </StyledSectionLeft>
  )
}

export default Introduction;