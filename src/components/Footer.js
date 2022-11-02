import styled from "styled-components";


const StyledFooter = styled.footer`
  margin-bottom: 1em;
  text-align: center;
  color: var(--dark);
  background: var(--accent);
  height: fit-content;
  padding: 0.5em;

  p {
    margin: 0;
  }

  a {
    color: var(--dark);
    font-size: 0.5em;
  }

`;


function Footer() {
  return (
    <StyledFooter>
      <p>©  Raytene  Han  2022</p>
      <a href="https://www.flaticon.com/free-icons/cat"
        title="cat icons"
        >Cat icons created by Freepik - Flaticon</a>
    </StyledFooter>
  );
}

export default Footer;