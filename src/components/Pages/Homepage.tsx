import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const HomepageContainer = styled.div`
  display: flex;
  background-color: #b2c9d1;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
const HomepageLink = styled(Link)`
  color: black;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
const WelcomeTextContainer = styled.div`
  display: flex;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  text-align: center;
  font-family: "Raleway", sans-serif;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  margin: auto;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
const WelcomeTextItem = styled.h1`
  color: white;
`;
const PreviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 25px;
`;
const AboutPreview = styled.div`
  background-color: white;
  width: 100vw;
  height: 90%;
`;
const AboutPreviewContent = styled.h1`
  font-family: "majesti_bannerbold", Times, serif; ;
`;
const ProjectsPreview = styled.div`
  background-color: #74f2b4;
  width: 100vw;
`;
const ProjectsPreviewContent = styled.h1`
  font-family: "majesti_bannerbold", Times, serif;
`;
const ContactPreview = styled.div`
  background-color: #90ccf4;
  width: 100vw;
`;
const ContactPreviewContent = styled.h1`
  font-family: "majesti_bannerbold", Times, serif;
`;

export const Homepage = () => {
  return (
    <HomepageContainer>
      <WelcomeTextContainer>
        <WelcomeTextItem>
          Hello, I'm Nader Ebrahim.
          <br /> I'm a front-end developer
        </WelcomeTextItem>
      </WelcomeTextContainer>
      <PreviewsContainer>
        <AboutPreview>
          <AboutPreviewContent>
            <HomepageLink to="/about">About</HomepageLink>
          </AboutPreviewContent>
        </AboutPreview>
        <ProjectsPreview>
          <ProjectsPreviewContent>
            <HomepageLink to="/projects">Projects I've worked on</HomepageLink>
          </ProjectsPreviewContent>
        </ProjectsPreview>
        <ContactPreview>
          <ContactPreviewContent>
            <HomepageLink to="/contact">How to get in touch</HomepageLink>
          </ContactPreviewContent>
        </ContactPreview>
      </PreviewsContainer>
    </HomepageContainer>
  );
};
