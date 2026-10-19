import Header from "./components/Header.jsx";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import Main from "./components/Main.jsx";
import Home from "./components/Home.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experiences.jsx";
import Project from "./components/Projects.jsx";
import Certificate from "./components/Certificates.jsx";
import Photography from "./components/Photography.jsx";

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

const Wrap = styled.div`
  display: flex;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyles/>

      <PageWrapper>
        <Header />
          <Wrap>
              <Nav/>
              <Main>
                  <Photography />
              </Main>
          </Wrap>

        <Footer />
      </PageWrapper>
    </>
  )
}
