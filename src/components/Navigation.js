import { useState, useEffect } from "react";
import { Navbar, Logo, StyledHashLink, StyledLogoLink, StyledHamburgerMenu, StyledHamburgerMenuItems } from "../styledComponents/navComponents";
// import '../App.css';
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

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

const sideNavVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
    }
  },
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "tween",
    }
  },
  initial: {
    opacity: 0
  }
};


const menuLinks = ["about", "projects", "experience", "contact"];

function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  function toggleMenu() {
    setIsExpanded(() => !isExpanded);
  }

  useEffect(() => {
    if (isDesktop) {
      setIsExpanded(false);
    }
  }, [isDesktop]);

  return (
    <>
      <div className="navbar">
        <Navbar>
          <motion.div
            variants={sideNavVariants}
            initial="closed"
            animate="open"
          >
            <StyledLogoLink
              to="home"
              smooth={true}
            >
              {"Raytene Han"}
            </StyledLogoLink>
          </motion.div>
          <motion.ul
            className="menu"
            variants={navVariants}
            initial="hidden"
            animate="visible">
            {menuLinks.map(link => (
              <motion.li variants={navItemVariants} key={link}>
                <StyledHashLink
                  activeClass="active"
                  to={link}
                  smooth={true}
                  spy={true}
                  hashSpy={true}
                  offset={100}
                  data-text={link}
                  className="menu-link"
                >
                  {link}
                </StyledHashLink>
              </motion.li>
            ))}
          </motion.ul>
        </Navbar>
      </div>
      <StyledHamburgerMenu onClick={toggleMenu}>
        <p><FontAwesomeIcon icon={isExpanded ? faX : faBars} /></p>
      </StyledHamburgerMenu>


      <motion.aside className="hamburger"
        variants={sideNavVariants}
        initial="initial"
        animate={isExpanded ? "open" : "closed"}
        transition={{ duration: .7 }}
      >
        <StyledHamburgerMenuItems>
          <ul>
            {menuLinks.map(link => (
              <li key={link}>
                <StyledHashLink
                  activeClass="active"
                  to={link}
                  smooth={true}
                  spy={true}
                  hashSpy={true}
                  offset={120}
                  data-text={link}
                  className="menu-link"
                  onClick={() => { setIsExpanded(false); }}
                >
                  {link}
                </StyledHashLink>
              </li>
            ))}
          </ul>
        </StyledHamburgerMenuItems>
      </motion.aside>
    </>
  );
}

export default Navigation;