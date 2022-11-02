import { useRef } from "react";
import { useInView } from "framer-motion";

import styled from "styled-components";
import { Title } from "../styledComponents/textComponents";
import { StyledSectionRight } from "../styledComponents/cardComponents";

const work = [
  {
    name: "Foqal",
    details: [
      {
        dates: "Oct 2022 - Oct 2022",
        description: "Software Engineer Intern",
      }
    ]
  },
  {
    name: "Rithm School",
    details: [
      {
        dates: "Jul 2022 - Oct 2022",
        description: "Full Stack Web Development"
      }
    ]
  },
  {
    name: "John A. Martin & Associates",
    details: [
      {
        dates: "Aug 2020 - May 2022",
        description: "Project Engineer",
      },
      {
        dates: "Jan 2019 - Aug 2020",
        description: "Project Designer",
      },
      {
        dates: "Jun 2017 - Sep 2018",
        description: "Structural Design Intern",
      },
    ]
  },
  {
    name: "UC San Diego",
    details: [
      {
        dates: "Sep 2017 - Dec 2018",
        description: "MS in Structural Engineering"
      },
      {
        dates: "Sep 2013 - Jun 2017",
        description: "BS in Structural Engineering"
      }
    ]
  }
];

const StyledTitleContainer = styled.div`
  text-align: right;
  position: relative;
  top: -7em;

  @media (max-width:645px) {
    top: 0;
    width: 95%;
  }
`;

const StyledTimeline = styled.div`
	width:320px;
	color:var(--dark);
	padding:0 20px ;

  ul {
    list-style-type: none;
    border-left: 1px solid var(--dark);
    padding: 10px 5px;
  }

  ul li {
    padding: 0 1em;
    position: relative;
    transition: .5s;
  }

  ul li span {
    display: block;
    color: var(--dark);
    font-size: 0.9em;
    font-style: italic;
    margin: 0 0.9em;
  }

  ul li article h4 {
    display: inline-block;
    background-color: var(--dark);
    border-radius: 1.2em;
    padding: 2px 10px;
    font-size: 1em;
    text-align: center;
    color: var(--lightest);
    margin-bottom: 0.5em;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }

  ul li article p {
    font-size: 1em;
    margin: 0 0.8em;
    color: var(--darkest)
  }

  ul li article div>p:nth-child(3) {
    margin-bottom: 1.5em;
  }

  ul li:before {
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    background-color: var(--accent);
    border-radius: 50%;
    left: -10px;
    top: 2em;
    transition: .5s;
  }

  ul li:hover:before {
    background-color: var(--accent);
    box-shadow: 0px 0px 10px 2px var(--accent);
  }
`;

function Experience() {
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
      <StyledTitleContainer>
        <Title>History</Title>
      </StyledTitleContainer>
      <StyledTimeline>
        <ul>
          {work.map(company => (
            <li key={company.name}>
              <article>
                <h4>{company.name}</h4>
                {company.details.map(detail => (
                  <div key={detail.description}>
                    <span>{detail.dates}</span>
                    <p>{detail.position ? detail.position : ""}</p>
                    <p>{detail.description}</p>
                  </div>
                ))}
              </article>
            </li>
          ))}
        </ul>
      </StyledTimeline>
    </StyledSectionRight>
  );
}

export default Experience;