import React, { useState } from "react";
import styled from "styled-components";

import { Sections } from "../../types";
import { GetBaseImgPath } from "../../utils";
import { ProjectItem } from "./ProjectItem";

const ProjectsContainer = styled.div`
  background-color: #f5f7fa;
  font-family: Roboto;
`;
const ProjectsTitleText = styled.div`
  color: #2b2b2b;

  font-size: 30pt;
  font-weight: bold;
`;
const ProjectItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const ProjectsPicturesColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
  padding-left: 30px;
  padding-bottom: 10px;
  padding-top: 20px;
`;

const ProjectDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  font-family: inherit;
`;

const ProjectParagraph = styled.div`
  font-size: 30pt;
`;

export const Projects = () => {
  const ProjectItemArray = [
    {
      title: "Calculator",
      src: `${GetBaseImgPath()}/Screenshots/calculatorScreenshot.png`,
      path: "https://js-calculator-nader.herokuapp.com/",
    },
    {
      title: "Clock",
      src: `${GetBaseImgPath()}/Screenshots/clockScreenshot.png`,
      path: "https://clock-nader.herokuapp.com/",
    },
    {
      title: "Drum-Machine",
      src: `${GetBaseImgPath()}/Screenshots/drumMachineScreenshot.png`,
      path: "https://drum-machine-nader.herokuapp.com/",
    },
    {
      title: "Github-Finder",
      src: `${GetBaseImgPath()}/Screenshots/githubFinderScreenshot.png`,
      path: "https://github-finder-nader.herokuapp.com/",
    },
  ];
  return (
    <ProjectsContainer id={Sections.projects}>
      <ProjectsTitleText>Projects</ProjectsTitleText>
      <ProjectItemsContainer>
        <ProjectsPicturesColumn>
          {ProjectItemArray.map(({ title, src, path }) => (
            <ProjectItem title={title} src={src} path={path} />
          ))}
        </ProjectsPicturesColumn>
        <ProjectDescriptions>
          <ProjectParagraph>
            I used these things to make this thing
          </ProjectParagraph>
        </ProjectDescriptions>
      </ProjectItemsContainer>
    </ProjectsContainer>
  );
};
