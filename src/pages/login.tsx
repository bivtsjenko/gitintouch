import AuthenticationForm from "../client/components/AuthenticationForm";
import styled from "styled-components";
import { device } from "../client/utils/breakpoints";
import { Container } from "./index.style";
import { fadeIn } from "../client/utils/animations";

const StyledForm = styled.div`
  padding: 1rem;
  border-radius: 5px;
  background: hsl(209, 30%, 15%);
  margin: 0 auto;
  display: block;
  text-align: center;
  box-shadow: 0 15px 25px rgb(0, 0, 0, 0.2);

  animation-name: ${fadeIn};
  animation-duration: 1s;
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

const Login = () => {
  return (
    <Container width={600}>
      <StyledForm>
        <StyledH1>Login</StyledH1>
        <StyledParagraph>Welkom terug</StyledParagraph>
        <AuthenticationForm />
      </StyledForm>
    </Container>
  );
};

export default Login;
