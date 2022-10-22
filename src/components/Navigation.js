import { Navbar, Logo, StyledHashLink } from "../styledComponents/navComponents";
// import '../App.css';
import { motion } from "framer-motion";

/** Navigation Component
 *
 */

const navVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const navItemVariants = {
  hidden: {
    opacity: 0,
    y: "-2vw",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: { type: "spring", stiffness: 80 }
    }
  }
};

function Navigation() {

  return (
    <div className="navbar">
      <Navbar>
        <Logo>
          <StyledHashLink
            to=""
            smooth={true}
            spy={true}
          >
            Raytene Han
          </StyledHashLink>
        </Logo>
        <motion.ul
          className="menu"
          variants={navVariants}
          initial="hidden"
          animate="visible">
          <motion.li variants={navItemVariants}>
            <StyledHashLink
              activeClass="active"
              to="about"
              smooth={true}
              spy={true}
              hashSpy={true}
              offset={100}
              data-text="About"
              className="menu-link"
            >
              About
            </StyledHashLink>
          </motion.li>
          <motion.li variants={navItemVariants}>
            <StyledHashLink
              activeClass="active"
              to="projects"
              smooth={true}
              spy={true}
              hashSpy={true}
              offset={100}
              data-text="Projects"
              className="menu-link"
            >
              Projects
            </StyledHashLink>
          </motion.li>
          <motion.li variants={navItemVariants}>
            <StyledHashLink
              to="experience"
              smooth={true}
              spy={true}
              hashSpy={true}
              offset={100}
              data-text="Experience"
              className="menu-link"
            >
              Experience
            </StyledHashLink>
          </motion.li>
          <motion.li variants={navItemVariants}>
            <StyledHashLink
              activeClass="active"
              to="contact"
              smooth={true}
              spy={true}
              hashSpy={true}
              offset={100}
              data-text="Contact"
              className="menu-link"
            >
              Contact
            </StyledHashLink>
          </motion.li>
        </motion.ul>
      </Navbar>
    </div>
  );
}

export default Navigation;