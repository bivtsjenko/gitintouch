import styled from "styled-components";
import { device } from "../../utils/breakpoints";

const StyledSearchInput = styled.input`
  background: hsl(0, 0%, 10%);
  border: solid 2px hsl(0, 0%, 30%);
  border-radius: 5px;
  padding: 1rem;
  width: 100%;
  outline: 0;
  color: white;
  transition: all 0.2s ease;

  &:active,
  &:focus {
    border: solid 2px hsl(0, 0%, 40%);
    box-shadow: 0 0 20px rgb(255, 255, 255, 0.15);
  }

  ${device.tablet} {
    width: 400px;
  }
`;

const Search = () => {
  return <StyledSearchInput placeholder="Zoek ontwikkelaars" />;
};

export default Search;
