import React from "react";
import styled from "styled-components";

import { TinyGithub } from "../../images/TinyGithub";
import { AppLink } from "../../images/AppLink";

interface IProps {
  title: string;
  src: string;
  path: string;
  description: string;
  technologies: string;
  height: string;
  width: string;
  github: string;
}
const ProjectItemContainer = styled.div``;

const ProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: auto;
  width: 800px;
  align-items: center;
  justify-content: center;
  background-color: green;
`;

const PictureContainer = styled.div``;

const ProjectPicture = styled.img`
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
  height: 300px;
  width: 80%;
  border-radius: 7px;
  transition: 0.5s;
`;
const ProjectInfoContainer = styled.div`
  font-size: 30px;
  color: white;
  z-index: 2;
  height: fit-content;
  justify-content: center;
  align-items: center;
  margin-left: -100px;
`;

const ProjectDescriptionContainer = styled.div`
  padding: 10px;
  color: white;
  justify-content: center;
  align-items: center;
  background-color: #2b2b2b;
  border-radius: 7px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  width: 250px;
`;
const ProjectTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #e73c7e;
  font-weight: bold;
`;
const ProjectDescriptions = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: flex-start;
  font-size: 17px;
`;

const ProjectTechs = styled.div`
  padding-left: 3px;
  color: rgba(255, 255, 255, 0.65);
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-end;
`;

export const ProjectItem = ({
  title,
  src,
  path,
  description,
  technologies,
  height,
  width,
  github,
}: IProps) => {
  return (
    <ProjectItemContainer>
      <ProjectRow>
        <PictureContainer>
          <ProjectPicture
            src={src}
            height={height}
            width={width}
            onClick={() => {
              window.open(path);
            }}
          />
        </PictureContainer>
        <ProjectInfoContainer>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescriptionContainer>
            <ProjectDescriptions>{description}</ProjectDescriptions>
            <ProjectTechs>{technologies}</ProjectTechs>
            <LinksContainer>
              <TinyGithub
                onClick={() => {
                  window.open(github);
                }}
              />
              <AppLink
                onClick={() => {
                  window.open(path);
                }}
              />
            </LinksContainer>
          </ProjectDescriptionContainer>
        </ProjectInfoContainer>
      </ProjectRow>
    </ProjectItemContainer>
  );
};
