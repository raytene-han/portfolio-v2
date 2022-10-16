import { useRef } from "react";
import { useInView } from "framer-motion";

import { Title, Subtitle, Footer } from "../styledComponents/textComponents";
import About from "./About";
import Experience from "./Timeline";
import TabCard from "./TabCard";
import Contact from "./Contact";
import { Container, StyledSectionLeft } from "../styledComponents/cardComponents";
import { DownArrow } from "./NavArrows";

const projects = ["Jobly", "ShareBnb", "Warbler"];
const about = ["Background", "Interests"];

function Homepage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // useScrollToHash();

  const scrollIntoView = {
    transform: isInView ? "none" : "translateY(50px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"
  };

  return (
    <>
      <Container id="">
        <StyledSectionLeft id="homepage"
          ref={ref}
          style={scrollIntoView}
        >
          <Title> Hi, I'm Raytene. </Title>
          <div className="break"></div>
          <Subtitle>Full stack developer. Cat enthusiast.</Subtitle>
          <div className="break"></div>
          <img className="portrait" src="/IMG_0225.jpeg" alt="avatar" />
        </StyledSectionLeft>
        <DownArrow />
      </Container>
      <Container id="about">
        <About />
      </Container>
      <Container id="projects">
        <TabCard tabs={projects} />
      </Container>
      <Container id="experience">
        <Experience />
      </Container>
      <Container id="contact">
        <Contact />
      </Container>
      <Footer>©  Raytene  Han  2022</Footer>
    </>
  );
}



export default Homepage;
