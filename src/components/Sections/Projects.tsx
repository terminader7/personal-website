import React, { useState } from "react";
import styled from "styled-components";

import { Sections } from "../../types";
import { GetBaseImgPath } from "../../utils";
import { ProjectItem } from "./ProjectItem";

const ProjectsContainer = styled.div`
  background-color: #f5f7fa;
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
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 0;
  align-items: center;
  justify-items: center;
`;

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
      src: `${GetBaseImgPath()}/Screenshots/githubFinderScreenshot.png,`,
      githubLink: "https://github.com/terminader7/github-finder",
    },
  ];
  return (
    <ProjectsContainer id={Sections.projects}>
      <ProjectsTitleText>Projects</ProjectsTitleText>
      <ProjectsPicturesGrid>
        {ProjectItemArray.map(({ title, src, githubLink }) => (
          <ProjectItem title={title} src={src} githubLink={githubLink} />
        ))}
      </ProjectsPicturesGrid>
    </ProjectsContainer>
  );
};
// make it sexy, or make a different mobile experience(carousel?) vs desktop experience.
