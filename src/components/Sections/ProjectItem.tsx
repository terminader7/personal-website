import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { TinyGithub } from "../../images/TinyGithub";
import { AppLink } from "../../images/AppLink";
import { mobileMediaQuery, tabletMediaQuery } from "../../constants";

interface IProps {
  title: string;
  src: string;
  path: string;
  description: string;
  technologies: string[];
  github: string;
}
const ProjectItemContainer = styled(motion.div)`
  display: flex;
`;

const ProjectRow = styled(motion.div)`
  display: flex;
  flex-direction: row;
  position: relative;
  height: auto;
  width: 1500px;
  align-items: flex-start;
  justify-content: center;
  padding-top: 30px;
  ${mobileMediaQuery} {
    flex-direction: column-reverse;
    width: 100vw;
    padding-top: 15px;
    align-items: center;
  }
  ${tabletMediaQuery} {
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
  width: fit-content;
  margin-left: 200px;
  ${mobileMediaQuery} {
    padding-top: 15px;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
  }
  ${tabletMediaQuery} {
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
    top: 10px;
    right: 10px;
  }
  ${tabletMediaQuery} {
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
    margin-bottom: 50px;
  }
  ${tabletMediaQuery} {
  }
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
  ${mobileMediaQuery} {
    width: 300px;
    position: static;
  }
  ${tabletMediaQuery} {
  }
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
  ${mobileMediaQuery} {
    font-size: 25px;
    justify-content: center;
    margin-left: 0px;
    width: 100vw;
  }
  ${tabletMediaQuery} {
  }
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
  ${mobileMediaQuery} {
    width: 300px;
    margin-top: 0px;
  }
  ${tabletMediaQuery} {
  }
`;

const ProjectDescription = styled(motion.div)`
  position: relative;
  display: flex;
  padding: 25px;
  justify-content: flex-start;
  font-size: 17px;
  font-weight: 100;
  ${mobileMediaQuery} {
  }
  ${tabletMediaQuery} {
  }
`;
const ProjectTechsContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
  ${mobileMediaQuery} {
  }
  ${tabletMediaQuery} {
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
  }
  ${tabletMediaQuery} {
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
  }
  ${tabletMediaQuery} {
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
  }
  ${tabletMediaQuery} {
  }
`;

const LinksContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  position: relative;
  bottom: 0;
  flex-direction: row;
  gap: 10px;
  padding-top: 40px;
  ${mobileMediaQuery} {
    gap: 7px;
    padding-top: 20px;
    justify-content: center;
  }
  ${tabletMediaQuery} {
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

  const [ref, inView] = useInView({ threshold: 1 });

  const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };

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
  if (deviceType() === "mobile") {
    return (
      <ProjectRow>
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
    );
  } else {
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
  }
};
