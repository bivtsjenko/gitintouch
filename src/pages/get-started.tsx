import AuthenticationForm from "../client/components/AuthenticationForm";
import { Container } from "./index.style";
import styled from "styled-components";
import { device } from "../client/utils/breakpoints";

const StyledForm = styled.div`
  padding: 1rem;
  border-radius: 5px;
  background: hsl(209, 30%, 15%);
  margin: 0 auto;
  display: block;
  text-align: center;
`;

const StyledH1 = styled.h1`
  font-size: 35px;

  ${device.mobileL} {
    font-size: 45px;
    margin: 0;
  }
`;

const StyledParagraph = styled.p`
  color: #f67f2a;
  margin-top: 0;
`;

const Signup = () => {
  return (
    <Container width={600}>
      <StyledForm>
        <StyledH1>Registreer je</StyledH1>
        <StyledParagraph>
          En vindt meteen ontwikkelaars in je buurt!
        </StyledParagraph>
        <AuthenticationForm />
      </StyledForm>
    </Container>
  );
};

export default Signup;
