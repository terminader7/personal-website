import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

import { TinyGithub } from "../images/TinyGithub";

const SocialsContainer = styled.div`
  display: flex;
  position: sticky;
  flex-direction: column;
  z-index: 3;
  bottom: 0px;
  justify-content: flex-start;
  background-color: #2b2b2b;
  padding-left: 80px;
`;

const SocialsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialLinkItem = styled(motion.div)`
  :hover {
    color: #14a76c;
  }
  display: flex;
  color: white;
  transition: 0.5s;
`;

export const Socials = () => {
  return (
    <SocialsContainer>
      <SocialsList>
        <SocialLinkItem whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
          <TinyGithub
            onClick={() => {
              window.open("https://github.com/terminader7");
            }}
          />
        </SocialLinkItem>
      </SocialsList>
    </SocialsContainer>
  );
};
