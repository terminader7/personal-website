import React from "react";
import styled from "styled-components";

import { TinyGithub } from "../../images/TinyGithub";
import { AppLink } from "../../images/AppLink";

interface IProps {
  title: string;
  src: string;
  path: string;
  description: string;
  technologies: string[];
  github: string;
}
const ProjectItemContainer = styled.div``;

const ProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: auto;
  width: 800px;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
`;

const PictureContainer = styled.div``;

const ProjectTitle = styled.div`
  :hover {
    color: #64ffda;
    cursor: pointer;
  }
  display: flex;
  justify-content: center;
  font-weight: bold;
  padding-bottom: 20px;
  transition: 0.5s;
`;
const ProjectPicture = styled.img`
  :hover {
    opacity: 0.65;
    cursor: pointer;
  }
  height: 350px;
  width: 450px;
  border-radius: 3px;
  transition: 0.5s;
`;
const ProjectInfoContainer = styled.div`
  font-size: 30px;
  color: white;
  z-index: 2;
  height: fit-content;
  justify-content: center;
  align-items: center;
  margin-left: -60px;
`;

const ProjectDescriptionContainer = styled.div`
  padding: 10px;
  color: white;
  justify-content: center;
  align-items: center;
  background-color: #2b2b2b;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  width: 400;
`;

const ProjectDescription = styled.div`
  display: flex;
  padding-left: 5px;
  padding-right: 5px;
  justify-content: flex-start;
  font-size: 17px;
`;

const ProjectTechs = styled.div`
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
  color: rgba(255, 255, 255, 0.65);
  font-size: 12px;
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

  github,
}: IProps) => {
  return (
    <ProjectItemContainer>
      <ProjectRow>
        <PictureContainer>
          <ProjectPicture
            src={src}
            onClick={() => {
              window.open(path);
            }}
          />
        </PictureContainer>
        <ProjectInfoContainer>
          <ProjectTitle
            onClick={() => {
              window.open(path);
            }}
          >
            {title}
          </ProjectTitle>
          <ProjectDescriptionContainer>
            <ProjectDescription>{description}</ProjectDescription>
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
