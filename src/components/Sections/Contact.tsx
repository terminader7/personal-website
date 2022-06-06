import React from "react";
import styled from "styled-components";

import { Github } from "../../images/Github";
import { Linkedin } from "../../images/Linkedin";
import { Resume } from "../../images/Resume";
import { Sections } from "../../types";
import { UpArrow } from "../../images/UpArrow";
import { ScrollTo } from "../../utils";

const ContactItemsContainer = styled.div`
  display: flex;
  height: 50vh;
  flex: 1;
  background-color: #2b2b2b;
  flex-direction: column;
`;
const ContactTextInvitation = styled.div`
  color: white;
  font-weight: bold;
  font-size: 25pt;
  font-family: Arial, Helvetica, sans-serif;
`;
const ContactLinks = styled.div`
  display: flex;
  height: calc(100% - 4px - 20px);
  width: calc(100% - 4px - 20px);
  border: 2px rgba(255, 255, 255, 0.65) solid;
  border-radius: 5px;
  gap: 10px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;
const EmailContainer = styled.div`
  background-color: #2b2b2b;
  flex-direction: row;
  border-radius: 5px;
`;
const EmailContainerItem = styled.a`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  height: min-content;
  width: min-content;
`;
const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const UpArrowContainer = styled.div`
  display: flex;
  position: sticky;
  :hover {
    background-color: #23a6d5;
  }
  justify-content: center;
  width: 60px;
  transition: 0.5s;
`;
export const Contact = () => {
  return (
    <ContactItemsContainer id={Sections.contact}>
      <ContactLinks>
        <ContactTextInvitation>Want to know more?</ContactTextInvitation>
        <EmailContainer>
          <EmailContainerItem href="mailto:nebrahim2424@gmail.com">
            nebrahim2424@gmail.com
          </EmailContainerItem>
        </EmailContainer>
        <LinksContainer>
          <Github
            onClick={() => {
              window.open("https://github.com/terminader7");
            }}
          />
          <Linkedin
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/nader-ebrahim-28576b199/"
              );
            }}
          />
          <Resume
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1t8Ob4M_V2B8fxoffVCIgKlNLGlez9Jyt/view?usp=sharing"
              );
            }}
          ></Resume>
        </LinksContainer>
        <UpArrowContainer>
          <UpArrow
            onClick={() => {
              ScrollTo(Sections.home);
            }}
          />
        </UpArrowContainer>
      </ContactLinks>
    </ContactItemsContainer>
  );
};
