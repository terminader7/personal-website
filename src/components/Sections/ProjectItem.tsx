import React, { useState } from "react";
import styled from "styled-components";

import { GetBaseImgPath } from "../../utils";

interface IProps {
  title: string;
  src: string;
  githubLink: string;
}

const ProjectPicture = styled.img`
  cursor: pointer;
  height: 330px;
  width: 390px;
`;
const ProjectHoverCardButton = styled.div`
  /* :hover {
    color: white;
    background-color: #23a6d5;
  } */
  color: black;
  background-color: white;
  transition: 0.5s;
`;
const ProjectCard = styled.div``;

const ProjectHoverCardText = styled.div``;

const ProjectHoverCard = styled.div``;

export const ProjectItem = ({ title, src, githubLink }: IProps) => {
  // const [isHovering, setIsHovering] = useState(false);

  // const handleMouseOver = () => {
  //   setIsHovering(!isHovering);
  //   console.log("Mouse Over");
  // };

  // const handleMouseOut = () => {
  //   setIsHovering(!isHovering);
  //   console.log("Mouse Out");
  // };
  return (
    // <ProjectCard onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
    /* {isHovering ? (
        <ProjectHoverCard>
          <ProjectHoverCardText>Calculator</ProjectHoverCardText>
          <ProjectHoverCardButton
            onClick={() => {
              window.open("https://github.com/terminader7/js-calculator");
            }}
          >
            Learn More
          </ProjectHoverCardButton>
        </ProjectHoverCard>
      ) : ( */
    <a href={githubLink} target="_blank">
      <ProjectPicture src={src} />
    </a>

    // </ProjectCard>
  );
};
