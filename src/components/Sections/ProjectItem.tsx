import React, { useState } from "react";
import styled from "styled-components";

interface IProps {
  title: string;
  src: string;
  path: string;
}

const ProjectCard = styled.div`
  position: relative;
  height: 300px;
  width: 320px;
`;

const PictureContainer = styled.div<{ isHovering: boolean }>`
  opacity: ${(props) => (props.isHovering ? ".1" : "1")};
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
  font-family: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

const ProjectHoverCardTitleText = styled.div`
  color: #2b2b2b;
  font-weight: 150;
  font-family: inherit;
`;

const ProjectHoverCardButton = styled.button`
  :hover {
    color: white;
    background-color: #23a6d5;
    border-color: transparent;
  }
  cursor: pointer;
  color: black;
  transition: 0.5s;
  width: 150px;
  height: 50px;
  font-size: 16px;
  font-family: inherit;
  padding: 15px;
  border: 2 solid white;
`;

export const ProjectItem = ({ title, src, path }: IProps) => {
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
            window.open(`${path}`);
          }}
        >
          Try it out!
        </ProjectHoverCardButton>
      </ProjectHoverCard>
      <PictureContainer isHovering={isHovering}>
        <ProjectPicture src={src} />
      </PictureContainer>
    </ProjectCard>
  );
};
