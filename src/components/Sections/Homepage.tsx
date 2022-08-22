import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Contact } from "./Contact";
import { About } from "./About";
import { Projects } from "./projects/Projects";
import { ScrollTo } from "../../utils";
import { Sections } from "../../types";
import { Navbar } from "../Navbar";
import { Socials } from "../Socials";
import { Email } from "../Email";
import { mobileMediaQuery } from "../../constants";

const HomepageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const WelcomeTextContainer = styled.div`
  display: flex;
  background: linear-gradient(-45deg, #a7c7e7, #00db8b, #ff5148, #ffb347);
  background-size: 400% 400%;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: gradient 60s ease infinite;
  ${mobileMediaQuery} {
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
const WelcomeText = styled(motion.h1)`
  display: flex;
  flex-direction: column;
  font-family: Bahnschrift;
  color: white;
  font-size: 50px;
  justify-content: center;
  align-items: center;
  ${mobileMediaQuery} {
    font-size: 27px;
  }
`;

const WelcomeButtonContainer = styled(motion.div)`
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
    border-color: white;
    cursor: pointer;
  }
  display: flex;
  flex-direction: row;
  background: transparent;
  border: 1px solid white;
  border-radius: 3px;
  height: 50px;
  color: white;
  width: auto;
  transition: 0.5s;
  align-items: center;
  padding: 0px 10px;
  justify-content: center;
  opacity: 0.5;
  ${mobileMediaQuery} {
    height: 40px;
  }
`;

const WelcomeButtonText = styled.div`
  font-size: 18px;
  font-family: Bahnschrift; ;
`;
const PreviewsContainer = styled.div`
  align-items: center;
  font-size: 25px;
  justify-content: center;
  width: 100%;
  background-color: #2b2b2b;
`;

export const Homepage = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  const appearVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1 },
  };

  return (
    <HomepageContainer>
      <WelcomeTextContainer id={Sections.home}>
        <WelcomeText
          variants={appearVariant}
          initial="hidden"
          transition={{ duration: 1 }}
          animate="visible"
        >
          <div>Hi, I'm Nader Ebrahim.</div>
          <div>I'm a front-end developer.</div>
        </WelcomeText>
        <WelcomeButtonContainer
          variants={appearVariant}
          initial="hidden"
          transition={{ duration: 1.5 }}
          animate="visible"
          onClick={() => {
            ScrollTo(Sections.about);
          }}
        >
          <WelcomeButtonText>Learn more about me</WelcomeButtonText>
        </WelcomeButtonContainer>
      </WelcomeTextContainer>
      <Navbar />
      <PreviewsContainer>
        <About />
        <Projects />
        <Contact />
        <Socials />
        <Email />
      </PreviewsContainer>
    </HomepageContainer>
  );
};
