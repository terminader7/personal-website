import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import { Sections } from "../../types";
import { UpArrow } from "../../images/UpArrow";
import { ScrollTo } from "../../utils";
import { TinyGithubTwo } from "../../images/TinyGithubTwo";

const ContactItemsContainer = styled.div`
  display: flex;
  height: 50vh;
  flex: 1;
  background-color: #2b2b2b;
  flex-direction: column;
  font-family: Bahnschrift;
`;
const ContactHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const HorizontalLine = styled.div`
  border-bottom: 2px solid #00db8b;
  width: 125px;
`;
const ContactTextInvitation = styled.div`
  color: white;
  font-weight: bold;
  font-size: 40pt;
  padding-bottom: 15px;
`;

const ContactTextInvitationTwo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 17pt;
  width: fit-content;
  padding-top: 35px;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
`;
const ContactLinks = styled.div`
  display: flex;
  height: calc(100% - 4px - 20px);
  width: calc(100% - 4px - 20px);
  border: 3px #14a76c solid;
  border-radius: 5px;
  gap: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  position: relative;
`;

const EmailButton = styled(motion.div)`
  :hover {
    background-color: #3d3d3d;
  }
  cursor: pointer;
  font-size: 20px;
  font-family: inherit;
  border: 2px #00db8b solid;
  border-radius: 5px;
  padding: 15px;
  color: #00db8b;
  transition: 0.5s;
`;

const UpArrowContainer = styled(motion.div)`
  display: flex;
  :hover {
    background-color: #00db8b;
  }
  justify-content: center;
  width: 60px;
  transition: 0.5s;
  margin-top: 20px;
  border-radius: 4px;
`;

const TinyGitHubContainer = styled.div`
  :hover {
    cursor: pointer;
    color: #00db8b;
  }
  display: flex;
  color: white;
  position: absolute;
  flex-direction: column;
  bottom: 0;
  right: 75px;
  font-family: inherit;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.65);
  transition: 0.5s;
  align-items: center;
  justify-content: center;
  width: 100px;
  gap: 5px;
  padding-bottom: 5px;
`;

const TinyGithubText = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Contact = ({ scaleSize = 1.1 }) => {
  return (
    <ContactItemsContainer id={Sections.contact}>
      <ContactLinks>
        <ContactHeaderContainer>
          <ContactTextInvitation>Want to know more?</ContactTextInvitation>
          <HorizontalLine />
          <ContactTextInvitationTwo>
            <div>I'm currently open to new job opportunities.</div>
            <div>
              If you would like to get in touch, my inbox is always open!
            </div>
          </ContactTextInvitationTwo>
        </ContactHeaderContainer>
        <EmailButton
          whileHover={{ scale: scaleSize }}
          transition={{ duration: 0.2 }}
          onClick={() => {
            window.open("mailto:nebrahim2424@gmail.com");
          }}
        >
          Lets Chat!
        </EmailButton>
        <UpArrowContainer
          whileHover={{ y: -5 }}
          transition={{ type: "spring", duration: 0.02 }}
        >
          <UpArrow
            onClick={() => {
              ScrollTo(Sections.home);
            }}
          />
        </UpArrowContainer>

        <TinyGitHubContainer
          onClick={() => {
            window.open("https://github.com/terminader7/personal-website");
          }}
        >
          <TinyGithubText>Like the site? View the repo here!</TinyGithubText>
          <TinyGithubTwo />
        </TinyGitHubContainer>
      </ContactLinks>
    </ContactItemsContainer>
  );
};
