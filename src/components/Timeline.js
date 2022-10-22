import { useRef } from "react";
import { useInView } from "framer-motion";

import { Title } from "../styledComponents/textComponents";
import { StyledSectionRight } from "../styledComponents/cardComponents";

import "./Timeline.css";

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

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollIntoView = {
    transform: isInView ? "none" : "translateY(50px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"
  };

  return (
    <StyledSectionRight id="experience"
      ref={ref}
      style={scrollIntoView}>
      <Title> Experience </Title>
      <div className="timeline">
        <ul>
          {work.map(company => (
            <li key={company.name}>
              <div className="content">
                <h4>{company.name}</h4>
                {company.details.map(detail => (
                  <div key={detail.description}>
                    <span>{detail.dates}</span>
                    <p>{detail.position ? detail.position : "" }</p>
                    <p>{detail.description}</p>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StyledSectionRight>
  );
}



export default Experience;