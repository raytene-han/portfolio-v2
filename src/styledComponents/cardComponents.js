import styled from "styled-components";


const StyledSection = styled.div`
  margin-bottom: 16em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledTabsCard = styled.div`
  width: 60%;
  height: 520px;
  border-radius: 20px;
  background: white;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;


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

  }

  li {
    border-radius: 15px;
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

    &.selected {
      background: var(--accent);
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

const StyledContactCard = styled.div`
  a {
    margin: 2em;
  }

  img {
    width: 2.5em;
  }
`;



export { StyledSection, StyledTabsCard, StyledContactCard };