import { useRef } from "react";
import { useInView } from "framer-motion";

import { Title } from "../styledComponents/textComponents";
import { StyledSectionRight } from "../styledComponents/cardComponents";
import "./About.css";
import styled from "styled-components";
import SkillsList from "./TechnicalSkills";
const skills = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL", "GraphQL"]
  },
  {
    name: "Libraries",
    skills: ["React", "jQuery"]
  },
  {
    name: "Frameworks",
    skills: ["Express.js", "Flask", "Jest"]
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "SQLAlchemy"]
  }
];

const StyledSkillsCard = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledAboutSection = styled.div`
  display: flex;
  flex-direction: row;
`


function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollIntoView = {
    transform: isInView ? "none" : "translateY(50px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"
  };

  return (
    <StyledSectionRight
      ref={ref}
      style={scrollIntoView}>
      <Title> About Me </Title>
      <div className="about-section">
        <div className="about-paragraph">
          <p>Hello! I'm Raytene, a software engineer based in Los Angeles. My background
            is in structural engineering, but I discovered a new passion for programming.
            I decided to attend Rithm School to begin my career in software engineering,
            and it was one of the best decisions I've made. Some of the projects I've
            built can be found below.
          </p>
          <p>Besides learning to code, I've also been spending my time learning to
            crochet, rollerblade, and cook new recipes.
          </p>
        </div>
        <div className="skills-section">
          <h5><span>My Technical Skills</span></h5>
          <StyledSkillsCard>
            {skills.map(type => <SkillsList skills={type} key={type.name} />)}
          </StyledSkillsCard>
        </div>
      </div>
    </StyledSectionRight>
  );
}



export default About;