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

const ProjectDescription = styled.div``;

export const Projects = () => {
  const ProjectItemArray = [
    {
      title: "Calculator",
      src: `${GetBaseImgPath()}/Screenshots/calculatorScreenshot.png`,
      githubLink: "https://github.com/terminader7/js-calculator",
    },
    {
      title: "Clock",
      src: `${GetBaseImgPath()}/Screenshots/clockScreenshot.png`,
      githubLink: "https://github.com/terminader7/clock",
    },
    {
      title: "Drum-Machine",
      src: `${GetBaseImgPath()}/Screenshots/drumMachineScreenshot.png`,
      githubLink: "https://github.com/terminader7/drum-machine-fcc",
    },
    {
      title: "Github-Finder",
      src: `${GetBaseImgPath()}/Screenshots/githubFinderScreenshot.png`,
      githubLink: "https://github.com/terminader7/github-finder",
    },
  ];
  return (
    <ProjectsContainer id={Sections.projects}>
      <ProjectsTitleText>Projects</ProjectsTitleText>
      <ProjectItemsContainer>
        <ProjectsPicturesColumn>
          {ProjectItemArray.map(({ title, src, githubLink }) => (
            <ProjectItem title={title} src={src} githubLink={githubLink} />
          ))}
        </ProjectsPicturesColumn>
        <ProjectDescription></ProjectDescription>
      </ProjectItemsContainer>
    </ProjectsContainer>
  );
};
