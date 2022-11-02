import { useRef } from "react";
import { useInView } from "framer-motion";

import { Title } from "../styledComponents/textComponents";
import { StyledSectionRight } from "../styledComponents/cardComponents";

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

const StyledAboutSection = styled.section`
  h1 {
    text-align: right;
  }
  h5 {
      width: 90%;
      text-align: center;
      border-bottom: 1px solid var(--accent);
      line-height: 0.1em;
      margin: 1em auto;
      color: var(--dark);
  }

  h5 span {
      background: var(--light);
      padding: 0 10px;
  }
`;

const StyledAboutArticle = styled.article`
  background: var(--accent);
  padding: 0.5em 1em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  color: var(--darkest);
  margin-bottom: 2em;

  p {
    margin: 0.5em 0;
  }
`;

const StyledSkillsSection = styled.section`
  margin-left: auto;
  margin-right: auto;

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

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
        <div>
      </div>
      <StyledAboutSection>
      <Title> About Me </Title>
        <StyledAboutArticle>
          <p>Hello! I'm Raytene, a software engineer based in Los Angeles. My background
            is in structural engineering, but I discovered a new passion for programming
            at my last job.
            I decided to attend Rithm School to begin my career in software engineering,
            and it was one of the best decisions I've made!
          </p>
          <p>Besides learning to code, I've also been spending my time learning to
            crochet, rollerblade, and cook new recipes.
          </p>
        </StyledAboutArticle>
        <StyledSkillsSection>
          <h5><span>My Technical Skills</span></h5>
          <div>
            {skills.map(type => <SkillsList skills={type} key={type.name} />)}
          </div>
        </StyledSkillsSection>
      </StyledAboutSection>
    </StyledSectionRight>
  );
}



export default About;