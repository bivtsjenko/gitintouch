import Link from "next/link";
import { useGetCurrentUserQuery } from "../../graphql/getCurrentUser.generated";
import styled from "styled-components";

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  background: black;
  padding: 1rem;
  
  a {
    color: white;
  }
`;

const Navbar = () => {
  const [{ data }] = useGetCurrentUserQuery();
  const isAuthenticated = !!data?.currentUser;

  return (
    <StyledNavbar>
      <Link href={isAuthenticated ? `/app` : `/`}>GitInTouch</Link>
      {isAuthenticated && <Link href="/api/auth/logout">Logout</Link>}
    </StyledNavbar>
  );
};

export default Navbar;
