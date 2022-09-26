import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";

const Navbar = styled.nav`

  padding-right: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1em;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background: var(--darkest);
  z-index: 1;
  height: 3em;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
`;

const StyledHashLink = styled(NavHashLink)`
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
