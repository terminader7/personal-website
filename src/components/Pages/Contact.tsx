import React from "react";
import styled from "styled-components";

import { Github } from "../../images/Github";
import { Linkedin } from "../../images/Linkedin";
import { Sections } from "../../types";

const ContactItemsContainer = styled.div`
  display: flex;
  height: 100vh;
  flex: 1;
  justify-content: center;
  background-color: grey;
  align-items: center;
  flex-direction: column;
`;
const ContactButton = styled.button`
  background-color: transparent;
  border: none;
`;
const ContactMessage = styled.div`
  color: white;
`;
const ContactLinks = styled.div`
  gap: 5px;
  background-color: white;

  flex-direction: row;
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
      <ContactMessage>How to reach me</ContactMessage>
      <ContactLinks>
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
