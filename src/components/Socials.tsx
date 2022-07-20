import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { TinyGithub } from "../images/TinyGithub";
import { Linkedin } from "../images/Linkedin";
import { Instagram } from "../images/Instagram";
import { Resume } from "../images/Resume";
import { Twitter } from "../images/Twitter";

const SocialsList = styled(motion.div)`
  display: flex;
  position: fixed;
  z-index: 0;
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
`;

const VerticalLine = styled.div`
  border-left: 1px solid white;
  height: 120px;
`;
export const Socials = () => {
  const appearVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1 },
  };
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
            window.open("https://www.linkedin.com/in/nader-ebrahim-28576b199/");
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
        <Twitter
          onClick={() => {
            window.open("https://twitter.com/The_terminader");
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
              "https://drive.google.com/file/d/1r4MbRv7Sq5-KCWn4IvtkroMD-ORP8tnM/view"
            );
          }}
        />
      </SocialLinkItem>
      <VerticalLine />
    </SocialsList>
  );
};
