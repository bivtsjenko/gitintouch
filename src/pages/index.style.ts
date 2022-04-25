import styled from "styled-components";
import image from "../assets/img/bg.jpg";
import { FlexDirectionType } from "./index";
import { device } from "../client/utils/breakpoints";

const StyledH1 = styled.h1`
  font-size: 35px;

  ${device.tablet} {
    font-size: 45px;
    margin: 0;
  }
`;

const StyledParagraph = styled.p`
  color: #f67f2a;
  margin-top: 0;
`;

const StyledBox = styled.div<{
  direction: FlexDirectionType;
  backgroundImage?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) =>
    direction === "column" ? "column" : "row"};
  // border: solid 1px hsl(210, 25%, 18%);
  // box-shadow: 0 5px 3px hsl(0, 100%, 0%);
  text-align: center;
  padding: 1rem;
  border-radius: 5px;
  background: ${({ backgroundImage }) =>
    backgroundImage
      ? `url(${image.src}) no-repeat bottom`
      : "hsl(209, 30%, 15%)"};
  // box-shadow: inset 0 0 0 2000px rgba(19, 19, 19, 0.75);
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

export { StyledBox, StyledH1, StyledParagraph, Container };
