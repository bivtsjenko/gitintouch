import styled from "styled-components";
import { FC } from "react";

type LinkVariantType = "primary" | "secondary";
type LinkProps = {
  variant: LinkVariantType;
  href: string;
  text: string;
  width?: number
};

const StyledLink = styled.a<{ variant: LinkVariantType; width?: number }>`
  background: ${({ variant }) =>
    variant === "primary" ? "hsl(27, 81%, 44%)" : "transparent"};
  padding: 0.5rem;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.2s ease;
  width: ${({ width }) => (width ? `${width}px` : null)};
  display: inline-block;
  text-align: center;

  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }

  &:hover {
    background: ${({ variant }) =>
      variant === "primary" ? "hsl(27,82%,51%)" : "rgba(255,255,255,0.1)"};
  }

  &:active {
    background: none;
    padding: 0.4rem;
    border: solid 2px rgba(255, 255, 255, 0.1);
  }
`;

const Link: FC<LinkProps> = ({ variant, href, text, width }) => (
  <StyledLink variant={variant} href={href} width={width}>
    {text}
  </StyledLink>
);

export default Link;
