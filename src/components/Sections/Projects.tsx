import React from "react";
import styled from "styled-components";

import { Sections } from "../../types";
import { GetBaseImgPath } from "../../utils";
import { ProjectItem } from "./ProjectItem";

import { Line } from "../../images/Line";

const ProjectsContainer = styled.div`
  background-color: #f5f7fa;
  font-family: Roboto;
`;

const ProjectHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProjectsTitleText = styled.div`
  color: #2b2b2b;
  font-size: 30pt;
  font-weight: bold;
`;
const ProjectContentContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProjectItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProjectsPictures = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 10px;
  padding-top: 20px;
`;

export const Projects = () => {
  const ProjectItemArray = [
    {
      title: "Calculator",
      src: `${GetBaseImgPath()}/Screenshots/calculatorScreenshot.png`,
      path: "https://js-calculator-nader.herokuapp.com/",
      github: "https://github.com/terminader7/js-calculator",
      description: "calculator woo",
      technologies: "cool things!",
      height: "",
      width: "",
    },
    {
      title: "25 + 5 Clock",
      src: `${GetBaseImgPath()}/Screenshots/clockScreenshot.png`,
      path: "https://clock-nader.herokuapp.com/",
      github: "https://github.com/terminader7/clock",
      description: "",
      technologies: "",
      height: "",
      width: "",
    },
    {
      title: "Drum-Machine",
      src: `${GetBaseImgPath()}/Screenshots/drumMachineScreenshot.png`,
      path: "https://drum-machine-nader.herokuapp.com/",
      github: "https://github.com/terminader7/drum-machine-fcc",
      description: "",
      technologies: "",
      height: "",
      width: "",
    },
    {
      title: "Github-Finder",
      src: `${GetBaseImgPath()}/Screenshots/githubFinderScreenshot.png`,
      path: "https://github-finder-nader.herokuapp.com/",
      github: "https://github.com/terminader7/github-finder",
      description: "",
      technologies: "",
      height: "",
      width: "",
    },
  ];
  return (
    <ProjectsContainer id={Sections.projects}>
      <ProjectHeaderContainer>
        <ProjectsTitleText>Projects</ProjectsTitleText>
        <Line />
      </ProjectHeaderContainer>
      <ProjectContentContainer>
        <ProjectItemsContainer>
          <ProjectsPictures>
            {ProjectItemArray.map(
              ({
                title,
                src,
                path,
                description,
                technologies,
                height,
                width,
                github,
              }) => (
                <ProjectItem
                  title={title}
                  src={src}
                  path={path}
                  description={description}
                  technologies={technologies}
                  height={height}
                  width={width}
                  github={github}
                />
              )
            )}
          </ProjectsPictures>
        </ProjectItemsContainer>
      </ProjectContentContainer>
    </ProjectsContainer>
  );
};
