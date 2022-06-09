import React, { useState } from "react";
import styled from "styled-components";

interface IProps {
  title: string;
  src: string;
  githubLink: string;
}

const ProjectCard = styled.div`
  position: relative;
  height: 300px;
  width: 320px;
`;

const PictureContainer = styled.div<{ isHovering: boolean }>`
  opacity: ${(props) => (props.isHovering ? "0" : "1")};
  transition: 0.5s;
`;

const ProjectPicture = styled.img`
  height: 300px;
  width: 320px;
`;

const ProjectHoverCard = styled.div<{ isHovering: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props) => (!props.isHovering ? "0" : "1")};
  z-index: 2;
`;

const ProjectHoverCardTitleText = styled.div``;

const ProjectHoverCardButton = styled.button`
  :hover {
    color: white;
    background-color: #23a6d5;
  }
  cursor: pointer;
  color: black;
  transition: 0.5s;
`;

export const ProjectItem = ({ title, src, githubLink }: IProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <ProjectCard onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <ProjectHoverCard isHovering={isHovering}>
        <ProjectHoverCardTitleText>{title}</ProjectHoverCardTitleText>
        <ProjectHoverCardButton
          onClick={() => {
            window.open(`${githubLink}`);
          }}
        >
          Learn More
        </ProjectHoverCardButton>
      </ProjectHoverCard>
      <PictureContainer isHovering={isHovering}>
        <ProjectPicture src={src} />
      </PictureContainer>
    </ProjectCard>
  );
};
