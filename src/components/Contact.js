import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Title } from "../styledComponents/textComponents";
import { StyledContactCard, StyledSection } from "../styledComponents/cardComponents";


const links = [
  {
    href: "https://github.com/raytene-han",
    src: "/github-icon.png",
    alt: "github"
  },
  {
    href: "https://linkedin.com/in/raytene-han",
    src: "/linkedin-icon.png",
    alt: "linkedin"
  }
];


function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollIntoView = {
    transform: isInView ? "none" : "translateY(100px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  };

  return (
    <StyledSection
      id="contact"
      ref={ref}
      style={scrollIntoView}>
      <StyledContactCard>
        <Title> Connect with Me </Title>
        {links.map(link => (
          <a href={link.href} key={link.alt}>
            <motion.img src={link.src} alt={link.alt} key={link.alt}
              whileHover={{ scale: 1.2 }} />
          </a>
        ))}
      </StyledContactCard>
    </StyledSection>
  );
}



export default Contact;