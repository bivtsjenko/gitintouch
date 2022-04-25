import Footer from "../Footer";
import Navbar from "../Navbar";
import { ReactNode } from "react";
import styled, { createGlobalStyle } from "styled-components";

type LayoutProps = {
  children: ReactNode;
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: hsl(210, 25%, 8%);
    color: white;
  }
`;

const Container = styled.div`
  display: block;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
