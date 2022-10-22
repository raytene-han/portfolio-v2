import { useRef } from "react";
import { useInView } from "framer-motion";

import { Title } from "../styledComponents/textComponents";
import { StyledSectionRight } from "../styledComponents/cardComponents";
import "./About.css";


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
      <div className="about">
        <p>Hi, I'm Raytene, a structural engineer pivoting into software engineering. At UC San Diego, I
          studied structural engineering and was exposed to basic programming
          using MatLab and OpenSees. While I had enjoyed the little programming in the school curriculum, I stayed the
          course and graduated with a degree in structural engineering. I went
          on to work at a structural engineering firm in LA for four years. Over the last four years, I worked on dozens of
          buildings, got my professional engineering license, and actually
          dabbled a bit in visual programming. My efforts were part of my firm's Advanced Tech initiative to automate design
          processes, where I reaffirmed my enjoyment of programming.
        </p>
        <p>
          As I entered my fourth year in the structural engineering profession, I began to reevaluate my career and where I
          wanted to be in the next few years.
          Software engineering came to mind, so I quit my job and applied to Rithm School to officially begin my transition
          to becoming a fullstack engineer. So far, I've participated in
          a few free workshops and learned some JavaScript fundamentals, designed a simple webpage (you're looking at it!)
          with HTML and CSS, and built a card-based memory game.
          I'm ecstatic for this next chapter in my career and am eager to see what else I can create. Stay tuned for more
          from me!
        </p>
      </div>
    </StyledSectionRight>
  );
}



export default About;