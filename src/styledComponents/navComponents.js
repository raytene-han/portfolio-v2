import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";

const Navbar = styled.nav`

  // padding-right: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1em;
  // position: -webkit-sticky; /* Safari */
  // position: sticky;
  top: 0;
  background: var(--darkest);
  z-index: 1;
  height: 3em;
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
`;

const StyledHashLink = styled(Link)`
  &:hover{
    font-weight: bold;
    cursor: pointer;
  };

  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.25rem;
  color: var(--accent);
  text-decoration: none;
`;

const StyledNavLink = styled(NavLink)`
  &:hover{
    font-weight: bold;
  };
  &:active{
    font-weight:bold;
  }

  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.25rem;
  color: var(--accent);
  text-decoration: none;
`;

const Logo = styled.div`
  width: 10px;
  height: 10px;
  background-color: pink;
  margin: 0 0 0 0.5em;
`;



export {  Navbar, NavLinks, StyledNavLink, StyledHashLink, Logo };
