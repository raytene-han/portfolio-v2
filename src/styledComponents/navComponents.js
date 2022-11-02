import styled from "styled-components";
import { Link } from "react-scroll";

const Navbar = styled.nav`

  // padding-right: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1em;
  // position: -webkit-sticky; /* Safari */
  // position: sticky;
  top: 0;
  z-index: 1;
  height: 4em;
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;

  ul {
    list-style-type: none;
    display: flex;
  }

`;

const StyledHashLink = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.5rem;
  color: var(--darkest);
  text-decoration: none;

  &:hover{
    font-weight: bold;
    cursor: pointer;
    color: var(--darkeraccent);
  };

  &:active{
    transform: translateY(2px);
  }
`;

const StyledLogoLink = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 0 0.5em;
  color: var(--dark);
  text-decoration: none;
  font-family: 'Ms Madi', cursive;
  font-size: 2.5em;
  cursor: pointer;
  text-shadow: 2px 2px var(--darkeraccent);
`;

const StyledHamburgerMenu = styled.button`
  width: 3em;
  height: 3em;
  font-size: 1em;
  border: none;
  border-radius: 50%;
  background: var(--accent);
  color: var(--dark);
  cursor: pointer;
  display: none;
  position: fixed;
  top: 0.5em;
  right: 0.5em;
  z-index:5;

  &:hover {
    color: var(--darkeraccent);
  }

  @media (max-width: 768px) {
    display: inline;
  }
`;

const StyledHamburgerMenuItems = styled.nav`

ul {
  display: flex;
  flex-direction: column;
}

li {
  list-style: none;
  list-style-position: outside;
  margin-bottom: 0.5em;
}
`;

export { Navbar, StyledHashLink, StyledLogoLink, StyledHamburgerMenu, StyledHamburgerMenuItems };
