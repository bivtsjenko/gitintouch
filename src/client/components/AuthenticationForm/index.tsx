import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { useGetCurrentUserQuery } from "../../graphql/getCurrentUser.generated";

const StyledFormInput = styled.input`
  background: transparent;
  border: solid 2px #525252;
  border-radius: 5px;
  padding: 0.5rem;
  width: 100%;
  outline: 0;
  color: white;
  transition: border 0.2s ease;
  margin-bottom: 5px;

  &:active,
  &:focus {
    border: solid 2px #9f9f9f;
  }
`;

const StyledButton = styled.button`
  background: hsl(27, 81%, 44%);
  border: 0;
  padding: 0.5rem;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.2s ease;
  width: 100%;
  display: inline-block;
  text-align: center;
  color: white;
  cursor: pointer;
  font-family: "OpenSans", serif;

  &:hover {
    background: hsl(27, 82%, 51%);
  }

  &:active {
    background: none;
    padding: 0.4rem;
    border: solid 2px rgba(255, 255, 255, 0.1);
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 1rem auto;
`;

/**
 * Used on the Login and Sign Up screens to handle authentication.
 * Can be shared between those as Passport.js
 * doesn't differentiate between logging in and signing up.
 */
const AuthenticationForm = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { r } = router.query;
  const redirect = r?.toString();
  const [{ data }] = useGetCurrentUserQuery();
  const isAuthenticated = !!data?.currentUser;

  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    // POST a request with the users email or phone number to the server
    fetch(`/api/auth/magiclink`, {
      method: `POST`,
      body: JSON.stringify({
        redirect,
        destination: email,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          // Add the email and security code to the query params,
          // so we can show them on the /check-mailbox page
          router.push(
            `/check-mailbox?e=${encodeURIComponent(email)}&c=${json.code}`
          );
        }
      });
  };

  const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setEmail(evt.target.value);

  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <StyledFormInput
        type="email"
        placeholder="me@hello.com"
        value={email}
        onChange={handleOnChange}
      />
      <StyledButton type="submit">
        {isAuthenticated ? "Login" : "Registreren"}
      </StyledButton>
    </StyledForm>
  );
};

export default AuthenticationForm;
