import React from "react";
import styled from "styled-components";

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
  font-size: 30pt;
  font-weight: bold;
  padding-bottom: 15px;
`;
const HorizontalLine = styled.div`
  border-bottom: 2px solid #00db8b;
  width: 125px;
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
      title: "Github Finder",
      src: `${GetBaseImgPath()}/Screenshots/githubFinderScreenshot.png`,
      path: "https://github-finder-nader.herokuapp.com/",
      github: "https://github.com/terminader7/github-finder",
      description:
        "React app to earch Github profiles. This app uses the Context API along with the useContext and useReducer hooks for state management.",
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
        "Calculator app that uses JavaScript to perform mathematical equations accurately.",
      technologies: ["ReactJS", "Styled Components", "Heroku", "JavaScript"],
    },
    {
      title: "Contact Keeper",
      src: `${GetBaseImgPath()}/Screenshots/contactKeeper.png`,
      path: "https://contact-keeper-nader.herokuapp.com/",
      github: "https://github.com/terminader7/Contact-Keeper",
      description:
        "This project is a Full Stack MERN Application in which a user can register an account and will be able to create and keep contacts with some basic information such as name, email, phone, etc. The app utilizes Mongo DB as its primary database.",
      technologies: ["ReactJS", "Node.JS", "Mongo DB", "Express", "Axios"],
    },
    {
      title: "Drum-Machine",
      src: `${GetBaseImgPath()}/Screenshots/drumMachineScreenshot.png`,
      path: "https://drum-machine-nader.herokuapp.com/",
      github: "https://github.com/terminader7/drum-machine-fcc",
      description:
        "Drum machine app with audio tied to each individual button press.",
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
