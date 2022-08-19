import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Github } from "../../../images/Github";
import { AppLink } from "../../../images/AppLink";
import { mobileMediaQuery } from "../../../constants";
import { deviceType } from "../../../utils";

interface IProps {
  title: string;
  src: string;
  path: string;
  description: string;
  technologies: string[];
  github: string;
}

const ProjectRow = styled(motion.div)`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 1500px;
  align-items: flex-start;
  justify-content: center;
  padding-top: 30px;
  ${mobileMediaQuery} {
    flex-direction: column;
    width: 100vw;
    padding-top: 0px;
    align-items: center;
  }
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
  width: auto;
  margin-left: 200px;
  ${mobileMediaQuery} {
    padding-top: 15px;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
    padding-bottom: 30px;
  }
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
  ${mobileMediaQuery} {
    top: 8px;
    right: 8px;
  }
`;
const PictureContainer = styled(motion.div)`
  :hover ${AccentBox} {
    top: 8px;
    right: 8px;
  }
  display: flex;
  position: relative;
  height: fit-content;
  width: fit-content;
  justify-content: center;
  align-items: center;
  transition: 0.25s ease-in-out;
  ${mobileMediaQuery} {
    margin-bottom: 30px;
  }
`;

const ProjectPicture = styled(motion.img)`
  z-index: 1;
  cursor: pointer;
  height: auto;
  width: 500px;
  border-radius: 3px;
  transition: 0.5s;
  transition: ease-in-out;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  ${mobileMediaQuery} {
    width: 300px;
  }
`;
const ProjectInfoContainer = styled(motion.div)`
  z-index: 2;
  font-size: 30px;
  color: white;
  margin-left: -60px;
  width: 500px;
  ${mobileMediaQuery} {
    display: flex;
    flex-direction: column;
    font-size: 25px;
    justify-content: center;
    margin-left: 0px;
    width: 100vw;
    align-items: center;
  }
`;

const ProjectDescriptionContainer = styled(motion.div)`
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
  ${mobileMediaQuery} {
    width: 300px;
    margin-top: 0px;
  }
`;

const ProjectDescription = styled(motion.div)`
  display: flex;
  padding: 25px;
  justify-content: flex-start;
  font-size: 17px;
  font-weight: 100;
  ${mobileMediaQuery} {
    justify-content: center;
    padding: 20px;
  }
`;
const ProjectTechsContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
  ${mobileMediaQuery} {
    justify-content: center;
  }
`;
const ProjectTechs = styled(motion.div)`
  display: flex;
  color: rgba(255, 255, 255, 0.65);
  font-size: 15px;
  flex-direction: row;
  ${mobileMediaQuery} {
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }
`;
const LinksContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  bottom: 0;
  flex-direction: row;
  gap: 10px;
  padding-top: 40px;
  ${mobileMediaQuery} {
    gap: 30px;
    padding-top: 20px;
    justify-content: center;
  }
`;
const TinyGithubContainer = styled(motion.div)`
  :hover {
    color: #00db8b;
  }
  cursor: pointer;
  display: flex;
  width: fit-content;
  height: fit-content;
  ${mobileMediaQuery} {
    color: #00db8b;
  }
`;

const AppLinkContainer = styled(motion.div)`
  :hover {
    color: #00db8b;
  }
  cursor: pointer;
  display: flex;
  width: fit-content;
  height: fit-content;
  ${mobileMediaQuery} {
    color: #00db8b;
  }
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

  const control2 = useAnimation();

  const [ref, inView] = useInView({ threshold: 1 });

  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [inView]);

  useEffect(() => {
    if (inView2) {
      control2.start("visible");
    }
  });

  const slideInLeftVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -200 },
  };
  const slideInRightVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 200 },
  };
  const appearFromBottomVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };
  const appearVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1 },
  };

  const device = deviceType();

  if (device === "mobile" || device === "tablet") {
    return (
      <ProjectRow
        ref={ref2}
        variants={appearFromBottomVariant}
        initial="hidden"
        transition={{ duration: 0.5 }}
        animate={control2}
      >
        <ProjectInfoContainer>
          <ProjectTitle
            onClick={() => {
              window.open(path);
            }}
          >
            {title}
          </ProjectTitle>
          <PictureContainer>
            <ProjectPicture
              src={src}
              onClick={() => {
                window.open(path);
              }}
            />
            <AccentBox />
          </PictureContainer>
          <ProjectDescriptionContainer>
            <ProjectDescription>{description}</ProjectDescription>
          </ProjectDescriptionContainer>
          <ProjectTechsContainer>
            <ProjectTechs>{technologies.join(",  ")}</ProjectTechs>
          </ProjectTechsContainer>
          <LinksContainer>
            <TinyGithubContainer>
              <Github
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
    );
  } else {
    return (
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
              <Github
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
    );
  }
};
