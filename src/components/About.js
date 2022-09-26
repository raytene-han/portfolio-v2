import { useRef } from "react";
import { useInView } from "framer-motion";

import { Title } from "../styledComponents/textComponents";
import { StyledSection } from "../styledComponents/cardComponents";


function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollIntoView = {
    transform: isInView ? "none" : "translateY(50px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  };

  return (
    <StyledSection id="about"
      ref={ref}
      style={scrollIntoView}>
      <Title> hello, this is the about section </Title>
      <h1>hi</h1>
    </StyledSection>
  );
}



export default About;