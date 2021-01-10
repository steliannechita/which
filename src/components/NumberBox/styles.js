import styled from "styled-components";
import { media } from "../../utils";

export const NumberBoxWrapper = styled.button`
  ${media.desktop} {
    height: 60px;
    min-width: 190px;
  }
  ${media.tablet} {
    height: 60px;
    min-width: 285px;
  }
  ${media.mobile} {
    height: 60px;
    width: 85%;
    min-width: 240px;
  }
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  &.highlight {
    background-color: #fcf484;
  }
  &.with-border {
    border: 3px solid black;
  }
`;
