import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { Github } from "../../images/Github";
import { Linkedin } from "../../images/Linkedin";
import { Resume } from "../../images/Resume";
import { Sections } from "../../types";
import { UpArrow } from "../../images/UpArrow";
import { ScrollTo } from "../../utils";
import { EmailLogo } from "../../images/EmailLogo";
import { LineTwo } from "../../images/LineTwo";

const ContactItemsContainer = styled.div`
  display: flex;
  height: 50vh;
  flex: 1;
  background-color: #2b2b2b;
  flex-direction: column;
  font-family: Roboto;
`;
const ContactHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ContactTextInvitation = styled.div`
  color: white;
  font-weight: bold;
  font-size: 40pt;
`;

const ContactTextInvitationTwo = styled.div`
  color: white;
  font-size: 17pt;
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
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding-top: 15px;
`;
const LinkItemContainer = styled(motion.div)`
  display: flex;
  height: fit-content;
  width: fit-content;
`;
const UpArrowContainer = styled.div`
  display: flex;
  position: sticky;
  :hover {
    background-color: #14a76c;
  }
  justify-content: center;
  width: 60px;
  transition: 0.5s;
`;

const BuiltByText = styled.div`
  display: flex;
  font-family: inherit;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
`;
export const Contact = ({ scaleSize = 1.1 }) => {
  return (
    <ContactItemsContainer id={Sections.contact}>
      <ContactLinks>
        <ContactHeaderContainer>
          <ContactTextInvitation>Want to know more?</ContactTextInvitation>
          <LineTwo />
          <ContactTextInvitationTwo>
            I'm currently open to new job opportunities, <br />
            if you would like to get in touch, my inbox is always open!
          </ContactTextInvitationTwo>
        </ContactHeaderContainer>
        <LinksContainer>
          <LinkItemContainer whileHover={{ scale: scaleSize }}>
            <Resume
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1t8Ob4M_V2B8fxoffVCIgKlNLGlez9Jyt/view?usp=sharing"
                );
              }}
            />
          </LinkItemContainer>
          <LinkItemContainer whileHover={{ scale: scaleSize }}>
            <Github
              onClick={() => {
                window.open("https://github.com/terminader7");
              }}
            />
          </LinkItemContainer>
          <LinkItemContainer whileHover={{ scale: scaleSize }}>
            <Linkedin
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/nader-ebrahim-28576b199/"
                );
              }}
            />
          </LinkItemContainer>
          <LinkItemContainer whileHover={{ scale: scaleSize }}>
            <EmailLogo
              onClick={() => {
                window.open("mailto:nebrahim2424@gmail.com");
              }}
            />
          </LinkItemContainer>
        </LinksContainer>
        <UpArrowContainer>
          <UpArrow
            onClick={() => {
              ScrollTo(Sections.home);
            }}
          />
        </UpArrowContainer>
        <BuiltByText>Designed & Built by Nader Ebrahim</BuiltByText>
      </ContactLinks>
    </ContactItemsContainer>
  );
};
