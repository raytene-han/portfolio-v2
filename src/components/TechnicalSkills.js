import styled from "styled-components";

const StyledSkillCard = styled.div`
  margin: 0.5em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 1em;
  width: 8em;
  height: fit-content;
  background: var(--lightest);
  color: var(--dark);
  border-radius: 10px;

  ul {
    margin: 0;
    padding: 0.5em 0 0 1em;
    list-style-type: "∙";
    list-style-position: outside;
  }

  li {
    margin: 0;
  }
  h4 {
    margin: 0;
    background: var(--accent);
    text-align: center;
  }

  @media (max-width: 368px) {
    width: clamp(6.4rem, -4.2667rem + 53.3333vw, 8rem);
    ul {
      padding: 0.5em 0 0 0.5em;
    }
  }
`;


function SkillsList({ skills }) {
  return (
    <StyledSkillCard>
      <h4>{skills.name}</h4>
      <ul>
        {skills.skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </StyledSkillCard>
  );
}

export default SkillsList;