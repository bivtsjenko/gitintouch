import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

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
    <form onSubmit={handleOnSubmit}>
      <input
        type="email"
        placeholder="me@hello.com"
        value={email}
        onChange={handleOnChange}
      />
      <button type="submit">Let's go!</button>
    </form>
  );
};

export default AuthenticationForm;
