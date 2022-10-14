// import { Nav, NavLinks, NavLink, NavbarBrand, Navbar } from "reactstrap";
import { Navbar, Logo, NavLinks, StyledNavLink, StyledHashLink } from "../styledComponents/navComponents";
import { scrollWithOffset } from "../utils/scroll";
import { Link } from "react-scroll";

// import '../App.css';

/** Navigation Component
 *
 */

function Navigation() {

  return (
    <div className="navbar">
      <Navbar>
        <Logo></Logo>
        <NavLinks className="menu">
        <li>
            <StyledHashLink
              activeClass="active"
              to="about"
              smooth={true}
              spy={true}
              hashSpy={true}
              offset={-80}
              data-text="About"
              className="menu-link"
            >
              About
            </StyledHashLink>
          </li>
          <li>
            <StyledHashLink
              activeClass="active"
              to="projects"
              smooth={true}
              spy={true}
              hashSpy={true}
              offset={-80}
              data-text="Projects"
              className="menu-link"
            >
              Projects
            </StyledHashLink>
          </li>
          <li>
            <StyledHashLink
              to="experience"
              smooth={true}
              spy={true}
              hashSpy={true}
              offset={-80}
              data-text="Experience"
              className="menu-link"
            >
              Experience
            </StyledHashLink>
          </li>
          <li>
            <StyledHashLink
              activeClass="active"
              to="contact"
              smooth={true}
              spy={true}
              hashSpy={true}
              offset={-80}
              data-text="Contact"
              className="menu-link"
            >
              Contact
            </StyledHashLink>
          </li>
          {/* <li>
            <StyledHashLink
              smooth to="/#about"
              scroll={scrollWithOffset}
              data-text="About"
              className="menu-link"
            >
              About
            </StyledHashLink>
          </li>
          <li>
            <StyledHashLink
              smooth to="/#projects"
              scroll={scrollWithOffset}
              data-text="Projects"
              className="menu-link"
            >
              Projects
            </StyledHashLink>
          </li>
          <li>
            <StyledHashLink
              smooth to="/#experience"
              scroll={scrollWithOffset}
              data-text="Experience"
              className="menu-link"
            >
              Experience
            </StyledHashLink>
          </li>
          <li>
            <StyledHashLink
              smooth to="/#contact"
              scroll={scrollWithOffset}
              data-text="Contact"
              className="menu-link"
            >
              Contact
            </StyledHashLink>
          </li>
          <li>
            <StyledNavLink
              to="/resume"
              data-text="Resume"
              className="menu-link"
            >
              Resume
            </StyledNavLink>
          </li> */}
        </NavLinks>
      </Navbar>
    </div>
  );
}

export default Navigation;