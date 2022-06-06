import React from "react";
import styled from "styled-components";

import { Sections } from "../../types";
import { GetBaseImgPath } from "../../utils";

const ProjectsContainer = styled.div`
  background-color: #cadbcf;
`;
const ProjectsTitleText = styled.div`
  color: #2b2b2b;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30pt;
  font-weight: bold;
`;
const ProjectsPicturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2fr 1fr;
  list-style: none;
  align-items: center;
`;
const ProjectPictures = styled.img`
  height: 200px;
  width: 200px;
`;

export const Projects = () => {
  return (
    <ProjectsContainer id={Sections.projects}>
      <ProjectsTitleText>Projects</ProjectsTitleText>
      <ProjectsPicturesGrid>
        <ProjectPictures
          src={`${GetBaseImgPath()}/Screenshots/calculatorScreenshot.png`}
        />
        <ProjectPictures
          src={`${GetBaseImgPath()}/Screenshots/clockScreenshot.png`}
        />
        <ProjectPictures
          src={`${GetBaseImgPath()}/Screenshots/drumMachineScreenshot.png`}
        />
        <ProjectPictures
          src={`${GetBaseImgPath()}/Screenshots/quoteBoxScreenshot.png`}
        />
      </ProjectsPicturesGrid>
    </ProjectsContainer>
  );
};
// make it sexy, or make a different mobile experience(carousel?) vs desktop experience.
