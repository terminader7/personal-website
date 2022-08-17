import React from "react";
import styled from "styled-components";
import { mobileMediaQuery, tabletMediaQuery } from "../../constants";

import { Sections } from "../../types";
import { GetBaseImgPath } from "../../utils";
import { ProjectItem } from "./ProjectItem";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2b2b2b;
  font-family: Bahnschrift;
  padding-bottom: 100px;
`;

const ProjectHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`;
const ProjectsSectionTitleText = styled.div`
  padding-top: 10px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  padding-bottom: 15px;
  ${mobileMediaQuery} {
    font-size: 25px;
    padding-bottom: 10px;
  }
  ${tabletMediaQuery} {
  }
`;
const HorizontalLine = styled.div`
  border-bottom: 2px solid #00db8b;
  width: 125px;
  ${mobileMediaQuery} {
    width: 70px;
  }
  ${tabletMediaQuery} {
  }
`;
const ProjectContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ProjectItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProjectsPictures = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Projects = () => {
  //make object differentiating left structure from right structure
  const ProjectItemArray = [
    {
      title: "Contact Keeper",
      src: `${GetBaseImgPath()}/Screenshots/contactKeeper.png`,
      path: "https://contact-keeper-nader.herokuapp.com/",
      github: "https://github.com/terminader7/Contact-Keeper",
      description:
        "This project is a Full Stack MERN Application. Users can register an account, create and edit contacts, and access those contacts between sessions. The app utilizes Mongo DB as its primary database.",
      technologies: ["ReactJS", "Node.JS", "Mongo DB", "Express", "Axios"],
    },
    {
      title: "Github Finder",
      src: `${GetBaseImgPath()}/Screenshots/githubFinderScreenshot.png`,
      path: "https://github-finder-nader.herokuapp.com/",
      github: "https://github.com/terminader7/github-finder",
      description:
        "React application for users to search for Github profiles. The application leverages the Github search API to return results based on user query.",
      technologies: [
        " ReactJS ",
        "Axios ",
        " Github API ",
        "Axios",
        " Heroku ",
      ],
    },
    {
      title: "Calculator",
      src: `${GetBaseImgPath()}/Screenshots/calculatorScreenshot.png`,
      path: "https://js-calculator-nader.herokuapp.com/",
      github: "https://github.com/terminader7/js-calculator",
      description:
        "Calculator app that uses JavaScript to perform mathematical equations.",
      technologies: ["ReactJS", "Styled Components", "Heroku", "JavaScript"],
    },
    {
      title: "Drum-Machine",
      src: `${GetBaseImgPath()}/Screenshots/drumMachineScreenshot.png`,
      path: "https://drum-machine-nader.herokuapp.com/",
      github: "https://github.com/terminader7/drum-machine-fcc",
      description:
        "FreeCodeCamp project to exercise basic CSS and JavaScript to make an interactive page",
      technologies: [
        "ReactJS",
        "CSS Styling",
        "JavaScript",
        "React Hooks",
        "Heroku",
      ],
    },
  ];
  return (
    <ProjectsContainer id={Sections.projects}>
      <ProjectHeaderContainer>
        <ProjectsSectionTitleText>Recent Projects</ProjectsSectionTitleText>
        <HorizontalLine />
      </ProjectHeaderContainer>
      <ProjectContentContainer>
        <ProjectItemsContainer>
          <ProjectsPictures>
            {ProjectItemArray.map(
              ({ title, src, path, description, technologies, github }) => (
                <ProjectItem
                  title={title}
                  src={src}
                  path={path}
                  description={description}
                  technologies={technologies}
                  github={github}
                />
              )
            )}
          </ProjectsPictures>
        </ProjectItemsContainer>
      </ProjectContentContainer>
    </ProjectsContainer>
  );
};
