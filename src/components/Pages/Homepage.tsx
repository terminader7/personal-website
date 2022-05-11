import React from "react";
import styled from "styled-components";

import { About } from "./About";

const HomepageContainer = styled.div`
  background-color: #b2c9d1;
`;

const AboutPreview = styled.div``;
const ProjectsPreview = styled.div``;
const ContactPreview = styled.div``;
export const Homepage = () => {
  return (
    <HomepageContainer>
      <AboutPreview>
        <h1>small blurb about me</h1>
      </AboutPreview>
      <ProjectsPreview>
        <h1>Projects preview</h1>
      </ProjectsPreview>
      <ContactPreview>
        <h1>Contact info preview</h1>
      </ContactPreview>
    </HomepageContainer>
  );
};
