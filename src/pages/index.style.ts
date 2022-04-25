import styled from "styled-components";
import image from "../assets/img/bg.jpg";
import { FlexDirectionType } from "./index";
import { device } from "../client/utils/breakpoints";
import { fadeIn } from "../client/utils/animations";

type ParagraphColorType = "blue";

const StyledH1 = styled.h1<{ space?: boolean }>`
  font-size: 35px;

  ${device.tablet} {
    font-size: 45px;
    margin: ${({ space }) => (space ? "0 0 1rem 0" : 0)};
  }
`;

const StyledParagraph = styled.p<{ color?: ParagraphColorType }>`
  color: ${({ color }) => (color === "blue" ? "hsl(219,100%,63%)" : "#f67f2a")};
  margin-top: 0;
`;

const StyledBox = styled.div<{
  direction: FlexDirectionType;
  backgroundImage?: boolean;
  variant?: "secondary";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) =>
    direction === "column" ? "column" : "row"};
  text-align: center;
  padding: 1rem;
  border-radius: 5px;
  background: ${({ backgroundImage }) =>
    backgroundImage
      ? `url(${image.src}) no-repeat bottom`
      : "hsl(209, 30%, 15%)"};
  box-shadow: ${({ backgroundImage }) =>
    backgroundImage ? "inset 0 0 0 2000px rgba(19, 19, 19, 0.75)" : null};
  background-size: cover;
  min-height: 75px;
  margin-bottom: 1rem;
`;

// TODO: Make this generic outside pages
const Container = styled.div<{ width?: number }>`
  width: 100%;
  padding: 0 1rem;

  ${device.tablet} {
    width: ${({ width }) => (width ? `${width}px` : "85%")};
    margin: 0 auto;
  }
`;

const StyledInnerContainer = styled.div`
  animation-name: ${fadeIn};
  animation-duration: 2s;
`;

export {
  StyledBox,
  StyledH1,
  StyledParagraph,
  Container,
  StyledInnerContainer,
};
