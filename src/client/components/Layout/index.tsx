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
    background: hsl(186, 0%, 5%);
    color: white;
    
    a {
      color: white;
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
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
