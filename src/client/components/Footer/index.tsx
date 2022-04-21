import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.div`
  background: black;
  color: white;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  
  a {
    color: white;
  }
`;

const Footer = () => {
  const getCurrentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <p>
        © {getCurrentYear}
        {" · "}
        <Link href="/privacy">Privacy policy</Link>
        {" · "}
        <Link href="/terms">Terms of Service</Link>
      </p>
    </StyledFooter>
  );
};

export default Footer;
