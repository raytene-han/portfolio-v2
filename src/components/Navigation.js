// import { Nav, NavLinks, NavLink, NavbarBrand, Navbar } from "reactstrap";
import {Navbar, Logo, NavLinks, StyledNavLink, StyledHashLink} from "../styledComponents/navComponents";
// import '../App.css';

/** Navigation Component
 *
 */

function Navigation() {

  return (

    <Navbar>
      <Logo></Logo>
      <NavLinks className="menu">
        <li>
        <StyledHashLink smooth to="/#about" data-text="About" className="menu-link">About</StyledHashLink>
        </li>
        <li>
        <StyledHashLink smooth to="/#projects" data-text="Projects" className="menu-link">Projects</StyledHashLink>
        </li>
        <li>
        <StyledHashLink smooth to="/#contact" data-text="Contact" className="menu-link">Contact</StyledHashLink>
        </li>
        <li>
        <StyledNavLink to="/resume" data-text="Resume" className="menu-link">Resume</StyledNavLink>
        </li>
      </NavLinks>
    </Navbar>
  )
}

export default Navigation;