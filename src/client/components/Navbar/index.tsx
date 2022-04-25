import { useGetCurrentUserQuery } from "../../graphql/getCurrentUser.generated";
import styled from "styled-components";
import { Container } from "../../../pages/index.style";
import Link from "../Link/Link";

const StyledNavbarOuter = styled.div`
  background: hsl(210, 50%, 4%);
`;

const StyledNavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  min-height: 75px;
  margin-bottom: 1rem;

  a {
    color: white;
    text-decoration: none;
  }
`;

const StyledLogo = styled.span`
  font-size: 28px;
`;

const Navbar = () => {
  const [{ data }] = useGetCurrentUserQuery();
  const isAuthenticated = !!data?.currentUser;

  return (
    <StyledNavbarOuter>
      <Container>
        <StyledNavbarInner>
          <StyledLogo>
            <Link
              variant="secondary"
              href={isAuthenticated ? `/app` : `/`}
              text="GitInTouch"
            />
          </StyledLogo>
          <div>
            {!isAuthenticated ? (
              <>
                <Link variant="secondary" href="/login" text="Login" />
                <Link
                  width={120}
                  variant="primary"
                  href="/get-started"
                  text="Registreer"
                />
              </>
            ) : (
              <Link variant="secondary" href="/api/auth/logout" text="Logout" />
            )}
          </div>
        </StyledNavbarInner>
      </Container>
    </StyledNavbarOuter>
  );
};

export default Navbar;
