import styled, { createGlobalStyle } from "styled-components";
import { media } from "../../utils";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #a1e4b2;
    height: auto;
    margin: 0;
    font-family: "Roboto", sans-serif;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  h1,p{margin:0}
`;

export const MainWrapper = styled.div`
  h1 {
    font-style: italic;
    color: #794616;
    width: 100%;
    text-align: center;
    padding: 10px;
    ${media.mobile} {
      font-size: 24px;
    }
  }
  p {
    width: 100%;
    margin: 0;
    text-align: center;
    margin-bottom: 10px;
    &.remember {
      font-style: italic;
      color: #794616;
    }
  }
  max-width: 700px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid #794616;
  padding: 0 5px 20px 5px;
  margin: 15px;
`;
