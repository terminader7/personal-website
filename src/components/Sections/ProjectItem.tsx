import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
const ProjectItemContainer = styled(motion.div)``;

const ProjectRow = styled(motion.div)`
  display: flex;
  flex-direction: row;
  position: relative;
  height: auto;
  width: 1500px;
  align-items: flex-start;
  justify-content: center;
  padding-top: 30px;
`;

const ProjectTitle = styled(motion.div)`
  :hover {
    color: #00db8b;
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
const AccentBox = styled(motion.div)`
  z-index: 0;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 100%;
  height: 100%;
  border: 2px solid #00db8b;
  border-radius: 3px;
  transition: 0.25s ease-in-out;
`;
const PictureContainer = styled(motion.div)`
  :hover ${AccentBox} {
    top: 10px;
    right: 10px;
  }
  display: flex;
  position: relative;
  height: fit-content;
  width: fit-content;
  justify-content: center;
  align-items: center;
  transition: 0.25s ease-in-out;
`;

const ProjectPicture = styled(motion.img)`
  z-index: 2;
  position: relative;
  cursor: pointer;
  height: auto;
  width: 500px;
  border-radius: 3px;
  transition: 0.5s;
  transition: ease-in-out;
`;
const ProjectInfoContainer = styled(motion.div)`
  z-index: 3;
  font-size: 30px;
  color: white;
  height: 350px;
  justify-content: flex-end;
  align-items: center;
  margin-left: -60px;
  width: 500px;
`;

const ProjectDescriptionContainer = styled(motion.div)`
  position: relative;
  color: white;
  justify-content: center;
  align-items: center;
  background-color: #3d3d3d;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  width: 500px;
  height: fit-content;
  transition: 0.3s ease-in-out;
  margin-top: 95px;
`;

const ProjectDescription = styled(motion.div)`
  position: relative;
  display: flex;
  padding: 25px;
  justify-content: flex-start;
  font-size: 17px;
  font-weight: 100;
`;
const ProjectTechsContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
`;
const ProjectTechs = styled(motion.div)`
  display: flex;
  color: rgba(255, 255, 255, 0.65);
  font-size: 15px;
  flex-direction: row;
`;
const TinyGithubContainer = styled(motion.div)`
  :hover {
    color: #00db8b;
  }
  cursor: pointer;
  display: flex;
  width: fit-content;
  height: fit-content;
`;

const AppLinkContainer = styled(motion.div)`
  :hover {
    color: #00db8b;
  }
  cursor: pointer;
  display: flex;
  width: fit-content;
  height: fit-content;
`;

const LinksContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  position: relative;
  bottom: 0;
  flex-direction: row;
  gap: 10px;
  padding-top: 40px;
`;

export const ProjectItem = ({
  title,
  src,
  path,
  description,
  technologies,
  github,
}: IProps) => {
  const control = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [inView]);

  const slideInLeftVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -200 },
  };
  const slideInRightVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 200 },
  };
  const appearVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1 },
  };

  return (
    <ProjectItemContainer>
      <ProjectRow>
        <PictureContainer>
          <ProjectPicture
            ref={ref}
            variants={slideInLeftVariant}
            initial="hidden"
            transition={{ duration: 1 }}
            animate={control}
            src={src}
            onClick={() => {
              window.open(path);
            }}
          />
          <AccentBox
            ref={ref}
            variants={appearVariant}
            initial="hidden"
            transition={{ duration: 2 }}
            animate={control}
          />
        </PictureContainer>
        <ProjectInfoContainer
          ref={ref}
          variants={slideInRightVariant}
          initial="hidden"
          transition={{ duration: 1 }}
          animate={control}
        >
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
            <TinyGithubContainer>
              <TinyGithub
                onClick={() => {
                  window.open(github);
                }}
              />
            </TinyGithubContainer>
            <AppLinkContainer>
              <AppLink
                onClick={() => {
                  window.open(path);
                }}
              />
            </AppLinkContainer>
          </LinksContainer>
        </ProjectInfoContainer>
      </ProjectRow>
    </ProjectItemContainer>
  );
};
