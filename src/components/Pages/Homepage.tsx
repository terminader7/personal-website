import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const HomepageContainer = styled.div`
  background-color: #b2c9d1;
`;
const HomepageLink = styled(Link)`
  color: black;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
const HomePageNavMenu = styled.nav``;
const AboutPreview = styled.div``;
const AboutPreviewContent = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
`;
const ProjectsPreview = styled.div``;
const ProjectsPreviewContent = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
`;
const ContactPreview = styled.div``;
const ContactPreviewContent = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
`;
export const Homepage = () => {
  return (
    <HomepageContainer>
      <HomePageNavMenu>
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
            <HomepageLink to="/contact">How to Contact Me</HomepageLink>
          </ContactPreviewContent>
        </ContactPreview>
      </HomePageNavMenu>
    </HomepageContainer>
  );
};
