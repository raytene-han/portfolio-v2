import styled from "styled-components";

const Container = styled.div`
  padding-top: 25vh;
  padding-bottom: 25vh;
  border: 2px solid green;
`

const StyledSectionLeft = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid red;
`;

const StyledSectionRight = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  flex-wrap: wrap;
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid red;
`;

const StyledTabsCard = styled.div`
  width: 100%;
  height: 520px;
  border-radius: 0;
  background: var(--lightest);
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  border: 2px solid red;

  nav {
    background: #fdfdfd;
    padding: 5px 5px 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid #eeeeee;
    height: 44px;
  }

  ul {
    display: flex;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1.5em;
    // border-left: 2px solid var(--dark);
  }

  li {
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
      color: var(--accent);
    }
    &.selected {
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

  p {
    // font-size: 2em;
  }
`;

const StyledProjectInfoCard = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 20em;
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