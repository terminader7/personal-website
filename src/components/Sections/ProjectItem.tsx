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
  width: 1500px;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  padding-top: 30px;
`;

const ProjectTitle = styled.div`
  :hover {
    color: #14a76c;
    cursor: pointer;
  }
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  transition: 0.5s;
  padding-top: 20px;
  width: fit-content;
  margin-left: 200px;
`;

const PictureContainer = styled.div`
  display: flex;
  height: 400px;
  width: 500px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const ProjectPicture = styled.img`
  :hover {
    opacity: 0.65;
    cursor: pointer;
  }
  height: auto;
  width: 500px;
  border-radius: 3px;
  transition: 0.5s;
`;
const ProjectInfoContainer = styled.div`
  font-size: 30px;
  color: white;
  z-index: 2;
  height: 350px;
  justify-content: flex-end;
  align-items: center;
  margin-left: -60px;
  width: 500px;
`;

const ProjectDescriptionContainer = styled.div`
  color: white;
  justify-content: center;
  align-items: center;
  background-color: #3d3d3d;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  width: 500px;
  height: fit-content;
  margin-top: 95px;
`;

const ProjectDescription = styled.div`
  display: flex;
  padding: 25px;
  justify-content: flex-start;
  font-size: 17px;
`;
const ProjectTechsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
`;
const ProjectTechs = styled.div`
  display: flex;
  color: rgba(255, 255, 255, 0.65);
  font-size: 15px;
  flex-direction: row;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  gap: 10px;
  padding-bottom: 15px;
  margin-left: 420px;
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
          </ProjectDescriptionContainer>
          <ProjectTechsContainer>
            <ProjectTechs>{technologies.join(",  ")}</ProjectTechs>
          </ProjectTechsContainer>
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
        </ProjectInfoContainer>
      </ProjectRow>
    </ProjectItemContainer>
  );
};
