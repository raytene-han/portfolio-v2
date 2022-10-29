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
  height: 3.5em;
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;

  ul {
    list-style-type: none;
    display: flex;
  }

`;

const StyledHashLink = styled(Link)`
  &:hover{
    font-weight: bold;
    cursor: pointer;
    color: var(--darkeraccent);
  };

  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
  color: var(--dark);
  text-decoration: none;

  // @media (max-width: 768px) {
  //   display: none;
  // }
`;

const StyledLogoLink = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 0 0.5em;
  color: var(--dark);
  text-decoration: none;
  font-family: 'Ms Madi', cursive;
  font-size: 2em;
  cursor: pointer;
  text-shadow: 2px 2px var(--accent);
`;


const Logo = styled.div`

`;

const StyledHamburgerMenu = styled.button`
  padding: 1em;
  font-size: 1em;
  border: none;
  background: none;
  color: var(--dark);
  cursor: pointer;
  display: none;
  position: fixed;
  top: 0.25em;
  right: 0.25em;
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

export { Navbar, StyledHashLink, StyledLogoLink, Logo, StyledHamburgerMenu, StyledHamburgerMenuItems };
