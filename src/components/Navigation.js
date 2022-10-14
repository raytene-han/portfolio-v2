import { Navbar, Logo, NavLinks, StyledHashLink } from "../styledComponents/navComponents";
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
              // offset={-20}
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
              // offset={-80}
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
              // offset={-80}
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
              // offset={-80}
              data-text="Contact"
              className="menu-link"
            >
              Contact
            </StyledHashLink>
          </li>
        </NavLinks>
      </Navbar>
    </div>
  );
}

export default Navigation;