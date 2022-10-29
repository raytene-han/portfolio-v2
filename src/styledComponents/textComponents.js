import styled from "styled-components";

const Title = styled.h1`
  font-size: clamp(2rem, 1.4079rem + 2.4671vw, 3rem);
  text-align: left;
  color: var(--dark);
  display: block;
  border-bottom: solid 2px rgba(100, 100, 111, 0.2);
  text-shadow: 3px 3px var(--accent);
  margin-bottom: 0.5em;
`;

const Subtitle = styled.h5`
  font-size: clamp(1.2rem, 1.0224rem + 0.7401vw, 1.5rem);
  text-align: left;
  color: var(--dark);
  display: block;
  margin-top: 0;
  margin-bottom: 0.5em;
`;

const Footer = styled.footer`
  margin-bottom: 1em;
  text-align: center;
  color: var(--dark);
`;




export { Title, Subtitle, Footer };
