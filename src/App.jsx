import Header from "./components/Header.jsx";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  
  #root {
    width: 100%; //for some reason, the root was super teeny so i had to reference it separately
  }
`;

const PageWrapper = styled.div`
  background-color: #ebf4f4;
  margin: 0 auto;
  height: 100%;
  width: 85%;
`;

export default function App() {
  return (
    <>
      <GlobalStyles/>

      <PageWrapper>
        <Header />
        <Nav/>
        <Footer />
      </PageWrapper>
    </>
  )
}
