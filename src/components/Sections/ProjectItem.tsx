import React from "react";
import styled from "styled-components";

import { TinyGithub } from "../../images/TinyGithub";
import { AppLink } from "../../images/AppLink";
import { App } from "../..";

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

const ProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: auto;
  width: 390px;
`;

const PictureContainer = styled.div`
  transition: 0.5s;
`;

const ProjectTitle = styled.div``;

const ProjectPicture = styled.img`
  height: 320px;
  width: 300px;
`;

const ProjectDescriptions = styled.div``;

const ProjectTechs = styled.div``;

const ProjectLink = styled.div``;

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
    <ProjectRow>
      <ProjectTitle>{title}</ProjectTitle>
      <PictureContainer>
        <ProjectPicture src={src} height={height} width={width} />
      </PictureContainer>
      <ProjectDescriptions>{description}</ProjectDescriptions>
      <ProjectTechs>{technologies}</ProjectTechs>
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
    </ProjectRow>
  );
};
