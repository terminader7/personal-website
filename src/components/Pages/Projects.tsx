import React from "react";
import styled from "styled-components";
import { Sections } from "../../types";

const ProjectsContainer = styled.div`
  background-color: #74f2b4;
`;

export const Projects = () => {
  return (
    <ProjectsContainer id={Sections.projects}>
      <div>Projects</div>
    </ProjectsContainer>
  );
};
// make it sexy, or make a different mobile experience(carousel?) vs desktop experience.
