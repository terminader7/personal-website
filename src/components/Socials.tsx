import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { TinyGithub } from "../images/TinyGithub";
import { Linkedin } from "../images/Linkedin";
import { Instagram } from "../images/Instagram";
import { Resume } from "../images/Resume";
import { mobileMediaQuery } from "../constants";
import { deviceType } from "../utils";

const SocialsList = styled(motion.div)`
  display: flex;
  position: fixed;
  z-index: 3;
  flex-direction: column;
  width: fit-content;
  justify-content: space-evenly;
  gap: 20px;
  left: 50px;
  bottom: 13px;
  justify-content: flex-start;
  width: auto;
  height: auto;
  background-color: transparent;
  align-items: center;
  ${mobileMediaQuery} {
    left: 13px;
    gap: 15px;
  }
`;

const SocialLinkItem = styled(motion.div)`
  :hover {
    cursor: pointer;
  }
  width: 25px;
  height: 25px;
  display: flex;
  color: white;
  transition: 0.5s;
  ${mobileMediaQuery} {
    height: 15px;
    width: 15px;
  }
`;

const VerticalLine = styled.div`
  border-left: 1px solid white;
  height: 120px;
  ${mobileMediaQuery} {
    height: 60px;
  }
`;
export const Socials = () => {
  const appearVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1 },
  };
  const device = deviceType();
  if (device === "mobile" || device === "tablet") {
    return <></>;
  } else {
    return (
      <SocialsList
        variants={appearVariant}
        initial="hidden"
        transition={{ duration: 3 }}
        animate="visible"
      >
        <SocialLinkItem
          whileHover={{ y: -10 }}
          transition={{ type: "spring", duration: 0.02 }}
        >
          <TinyGithub
            onClick={() => {
              window.open("https://github.com/terminader7");
            }}
          />
        </SocialLinkItem>
        <SocialLinkItem
          whileHover={{ y: -10 }}
          transition={{ type: "spring", duration: 0.1 }}
        >
          <Linkedin
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/nader-ebrahim-28576b199/"
              );
            }}
          />
        </SocialLinkItem>
        <SocialLinkItem
          whileHover={{ y: -10 }}
          transition={{ type: "spring", duration: 0.1 }}
        >
          <Instagram
            onClick={() => {
              window.open("https://www.instagram.com/the_terminader/");
            }}
          />
        </SocialLinkItem>
        <SocialLinkItem
          whileHover={{ y: -10 }}
          transition={{ type: "spring", duration: 0.1 }}
        >
          <Resume
            onClick={() => {
              window.open(
                "https://docs.google.com/document/d/1L5rM2lNEvGW-y87W-DhdTfmfv7Jyk58Oh88hihm04YA/edit?usp=sharinghttps://docs.google.com/document/d/1L5rM2lNEvGW-y87W-DhdTfmfv7Jyk58Oh88hihm04YA/edit?usp=sharing"
              );
            }}
          />
        </SocialLinkItem>
        <VerticalLine />
      </SocialsList>
    );
  }
};
