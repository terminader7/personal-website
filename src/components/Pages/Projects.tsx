import React from "react";
import styled from "styled-components";
import { Sections } from "../../types";

const ProjectsContainer = styled.div`
  background-color: #74f2b4;
`;
const ProjectsTitleText = styled.div`
  color: #2b2b2b;
`;

export const Projects = () => {
  return (
    <ProjectsContainer id={Sections.projects}>
      <ProjectsTitleText>Projects</ProjectsTitleText>
    </ProjectsContainer>
  );
};
// make it sexy, or make a different mobile experience(carousel?) vs desktop experience.
