import { useGetCurrentUserQuery } from "../client/graphql/getCurrentUser.generated";
import { StyledBox, StyledParagraph, StyledH1, Container } from "./index.style";

export type FlexDirectionType = "column" | "row";

const Homepage = () => {
  const [{ data }] = useGetCurrentUserQuery();
  // const isAuthenticated = !!data?.currentUser;

  return (
    <Container>
      <StyledBox direction="column">
        <StyledH1>Welkom op GitInTouch!</StyledH1>
        <StyledParagraph>
          De plek waar recruiters en ontwikkelaars met elkaar verbinden.
        </StyledParagraph>
      </StyledBox>

      <StyledBox direction="row">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab odio omnis
        vel!
      </StyledBox>
    </Container>
  );
};

export default Homepage;
