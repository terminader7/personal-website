import React from "react";
import styled from "styled-components";

import { Github } from "../../images/Github";
import { Linkedin } from "../../images/Linkedin";
import { Sections } from "../../types";

const ContactItemsContainer = styled.div`
  display: flex;
  height: 100vh;
  flex: 1;
  background-color: #2b2b2b;
  flex-direction: column;
`;
const ContactButton = styled.button`
  background-color: transparent;
  border: none;
`;
const ContactTitleText = styled.div`
  color: white;
  font-size: 30pt;
  font-weight: bold;
`;
const ContactTextInvitation = styled.div`
  color: black;
`;
const ContactLinks = styled.div`
  gap: 5px;
  background-color: white;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: auto;
`;
const EmailContainer = styled.div`
  border-color: black;
  flex-direction: row;
`;
const EmailContainerItem = styled.a`
  height: min-content;
  width: min-content;
`;
export const Contact = () => {
  return (
    <ContactItemsContainer id={Sections.contact}>
      <ContactTitleText>Contact</ContactTitleText>
      <ContactLinks>
        <ContactTextInvitation>Want to know more?</ContactTextInvitation>
        <EmailContainer>
          <EmailContainerItem href="mailto:nebrahim2424@gmail.com">
            nebrahim2424@gmail.com
          </EmailContainerItem>
        </EmailContainer>
        <ContactButton>
          <Github
            onClick={() => {
              window.open("https://github.com/terminader7");
            }}
          />
        </ContactButton>
        <ContactButton>
          <Linkedin
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/nader-ebrahim-28576b199/"
              );
            }}
          />
        </ContactButton>
      </ContactLinks>
    </ContactItemsContainer>
  );
};
