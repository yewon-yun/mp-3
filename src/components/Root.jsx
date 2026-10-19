import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Nav from "./Nav.jsx";
import Main from "./Main.jsx";
import Home from "./Home.jsx";
import Education from "./Education.jsx";
import Experience from "./Experiences.jsx";
import Project from "./Projects.jsx";
import Certificate from "./Certificates.jsx";
import Photography from "./Photography.jsx";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

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

export default function Root() {
    return (
        <PageWrapper>
            <Header />
            <Wrap>
                <Nav />
                <Main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/experiences" element={<Experience />} />
                        <Route path="/projects" element={<Project />} />
                        <Route path="/photography" element={<Photography />} />
                        <Route path="/certificates" element={<Certificate />} />
                    </Routes>
                </Main>
            </Wrap>
            <Footer />
        </PageWrapper>
    );
}