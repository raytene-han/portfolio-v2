import { useState, useEffect } from "react";
import { Navbar, StyledHashLink, StyledLogoLink, StyledHamburgerMenu, StyledHamburgerMenuItems } from "../styledComponents/navComponents";

import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import debounce from "../utils/debounce";
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

const logoVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      delay: 0.5
    }
  },
  closed: {
    opacity: 0,
    x: "-100%",
    transition: {
      type: "tween",
    }
  }
};

const menuLinks = ["about", "portfolio", "history", "contact"];

const StyledNavBar = styled.div`
  background: var(--accent);
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1;
  box-sizing: border-box;
	transition: 0.4s ease-in-out;
  height: 4em;


  @media (max-width: 768px) {
    .menu {
      display: none;
    }
  }
`;

const StyledSideNav = styled.aside`
  div {
    position: fixed;
    top: 0;
    width: 50vw;
    max-width: 18em;
    height: 100vh;
    margin-left: max(50vw, calc(100% - 18em));
    background: var(--accent);
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    padding-top: 20vh;
  }
`;

function Navigation() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setIsVisible((prevScrollPos > currentScrollPos
      && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    if (isDesktop) {
      setIsExpanded(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDesktop, prevScrollPos, handleScroll]);

  function toggleMenu() {
    setIsExpanded(() => !isExpanded);
  }

  const navbarStyle = {
    top: isVisible ? '0' : '-4em',
    boxShadow: window.pageYOffset === 0 ?
      'none' :
      'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
  };

  return (
    <>
      <StyledNavBar
        style={navbarStyle}>
        <Navbar>
          <motion.div
            variants={logoVariants}
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
                  offset={20}
                  data-text={link}
                >
                  {link}
                </StyledHashLink>
              </motion.li>
            ))}
          </motion.ul>
        </Navbar>
      </StyledNavBar>
      <StyledHamburgerMenu onClick={toggleMenu}>
        <FontAwesomeIcon icon={isExpanded ? faX : faBars} />
      </StyledHamburgerMenu>
      <StyledSideNav>
        <motion.div
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
                    offset={30}
                    data-text={link}
                    onClick={() => { setIsExpanded(false); }}
                  >
                    {link}
                  </StyledHashLink>
                </li>
              ))}
            </ul>
          </StyledHamburgerMenuItems>
        </motion.div>
      </StyledSideNav>
    </>
  );
}

export default Navigation;