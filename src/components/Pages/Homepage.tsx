import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const HomepageContainer = styled.div`
  display: flex;
  background-color: #b2c9d1;
  align-items: stretch;
  width: 100vw;
  height: 91vh; //hardcoded, make less hacky
`;
const HomepageLink = styled(Link)`
  color: black;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
const WelcomeTextContainer = styled.div``;
const WelcomeTextItem = styled.h1``;
const PreviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 100%;
  text-align: center;
  font-size: 25px;
`;
const AboutPreview = styled.div`
  background-color: #f78888;
  width: 33.3vw;
`;
const AboutPreviewContent = styled.h1`
  font-family: "majesti_bannerbold", Times, serif; ;
`;
const ProjectsPreview = styled.div`
  background-color: #74f2b4;
  width: 33.3vw;
`;
const ProjectsPreviewContent = styled.h1`
  font-family: "majesti_bannerbold", Times, serif;
`;
const ContactPreview = styled.div`
  background-color: #90ccf4;
  width: 33.4vw;
`;
const ContactPreviewContent = styled.h1`
  font-family: "majesti_bannerbold", Times, serif;
`;
export const Homepage = () => {
  return (
    <HomepageContainer>
      {/* <WelcomeTextContainer>
        <WelcomeTextItem>Front End Developer</WelcomeTextItem>
      </WelcomeTextContainer> */}
      <PreviewsContainer>
        <AboutPreview>
          <AboutPreviewContent>
            <HomepageLink to="/about">More About Me</HomepageLink>
          </AboutPreviewContent>
        </AboutPreview>
        <ProjectsPreview>
          <ProjectsPreviewContent>
            <HomepageLink to="/projects">Projects I've worked on</HomepageLink>
          </ProjectsPreviewContent>
        </ProjectsPreview>
        <ContactPreview>
          <ContactPreviewContent>
            <HomepageLink to="/contact">How to Get in Touch</HomepageLink>
          </ContactPreviewContent>
        </ContactPreview>
      </PreviewsContainer>
    </HomepageContainer>
  );
};
