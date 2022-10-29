import styled from "styled-components";

const Container = styled.div`
  padding-top: 25vh;
  padding-bottom: 25vh;

  @media (max-width: 968px) {
    padding: 25vh 0.5em;
  }

`

const StyledSectionLeft = styled.section`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledSectionRight = styled.section`
  display: flex;
  justify-content: right;
  align-items: center;
  flex-wrap: wrap;
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledTabsCard = styled.div`
  width: 100%;
  height: clamp(23.125rem, 1.3882rem + 45.2261vw, 28.75rem);
  border-radius: 0;
  background: var(--lightest);
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  display: flex;
  flex-direction: column;

  nav {
    background: var(--lightest);
    padding: 5px 5px 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid #eeeeee;
    height: 44px;
  }

  ul.tabs {
    display: flex;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1.5em;
  }

  li.tabs {
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
    padding: 10px 15px;
    position: relative;
    background: var(--lightest);
    color: var(--darkest);
    cursor: pointer;
    height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    min-width: 0;
    user-select: none;
    transition: all 0.25s ease;

    &:hover {
      color: var(--darkeraccent);
    }
    &.selected {
      background: var(--dark);
      color: var(--accent);
    }


  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    flex-grow: 1;
    user-select: none;
    background: var(--lightest);
  }

  @media (max-width: 768px) {
    height: clamp(31.25rem, 8.7500rem + 62.5000vw, 38.75rem);

    ul.tabs {
      font-size: clamp(1rem, 0.7039rem + 1.3158vw, 1.5rem);
    }

    li.tabs {
      padding: 5px 7px;
    }
  }

  @media (max-width: 576px) {
    height: clamp(26.5rem, 20.8750rem + 28.1250vw, 31rem);
  }
`;

const StyledProjectInfoCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.2em;
  box-sizing: border-box;

  img {
    width: 75%;
    border-radius: 10px;

  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0em;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    box-sizing: border-box;
  }

  p {
    display: flex;
    color: var(--dark);
    font-size: 0.5em;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin: 0 0.7em;
    padding: 0;
    list-style-type: "∙";
    list-style-position: outside;
    color: var(--dark);
  }

  li {
    font-size: 0.5em;
    margin: 0.1em 0;
  }

  a {
    text-decoration: none;
    padding: 0em 0.3em;
    color: var(--dark);
    font-size: 0.6em;
    margin-bottom: 5em;
    margin-left: 0.5em;
    margin-top: 1.5em;
  }

  a:visited {
    color: var(--dark);
  }

  a:hover {
    color: var(--darkeraccent);
  }

  .links {
    display: flex;
    flex-direction: row;
  }

  .project-description {
    background: var(--accent);
    margin: 2em 0.7em;
    padding: 0.5em;
    position: absolute;
    width: 300px;
    left: min(-85px, (100vw - 968px) / 2 - 50px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    .project-description {
      position: relative;
      left: 0;
      top: 0.2em;
      margin: 0;
      width: 100%;
      padding: 0.4em;
      min-width: 0;
    }

    img {
      width: 100%;
      height: fit-content;
      min-width: 0;
      object-fit: cover;
    }

    ul {
      flex-direction: row;
      flex-wrap: wrap;
      margin: 0.5em 0.4em 1.5em 0.4em;
    }

    .links{
      position: absolute;
      bottom: 0.2em;
      right: 0.2em;
    }

    a {
      margin-top: 0;
      margin-bottom: 0;
    }

    li {
      margin: 0 0.5em;
    }


  }

`;

const StyledContactCard = styled.div`
  a {
    margin: 2em;
  }

  img {
    width: 2.5em;
  }
`;



export {
  Container,
  StyledSectionLeft,
  StyledSectionRight,
  StyledTabsCard,
  StyledProjectInfoCard,
  StyledContactCard };