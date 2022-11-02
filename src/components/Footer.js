import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Copyright = styled.footer`
  margin-bottom: 1em;
  text-align: center;
  color: var(--dark);
  background: var(--accent);
  height: fit-content;
  padding: 0.5em;

  p {
    margin: 0;
    margin-top: 1em;
  }
  a {
    color: var(--darkest);
    margin: 0 0.5em;
  }
  a:hover {
    color: var(--darkeraccent);
  }
`;


function Footer() {
  return (
    <Copyright>
      <a href="https://linkedin.com/in/raytene-han" className="social">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/raytene-han" className="social">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <p>©  Raytene  Han  2022</p>
    </Copyright>
  );
}

export default Footer;