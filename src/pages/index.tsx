import { useGetCurrentUserQuery } from "../client/graphql/getCurrentUser.generated";
import {
  StyledBox,
  StyledParagraph,
  StyledH1,
  Container,
  StyledInnerContainer,
} from "../styles/index.style";
import Search from "../client/components/Search/Search";

export type FlexDirectionType = "column" | "row";

const Homepage = () => {
  const [{ data }] = useGetCurrentUserQuery();
  const isAuthenticated = !!data?.currentUser;

  return (
    <Container>
      <StyledInnerContainer>
        <StyledBox direction="column">
          <StyledH1>
            Welkom {isAuthenticated ? data?.currentUser : "op GitInTouch!"}
          </StyledH1>
          <StyledParagraph>
            De plek waar recruiters en ontwikkelaars met elkaar verbinden.
          </StyledParagraph>
        </StyledBox>

        <StyledBox backgroundImage direction="column">
          <StyledH1>Ontwikkelaars vinden</StyledH1>
          <StyledParagraph color="blue">Direct aan de slag</StyledParagraph>
          <Search />
        </StyledBox>

        <StyledBox direction="row">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab odio
          omnis vel!
        </StyledBox>
      </StyledInnerContainer>
    </Container>
  );
};

export default Homepage;
