import React from "react";
import styled from "styled-components";

import { Contact } from "./Contact";
import { About } from "./About";
import { Projects } from "./Projects";
import { ScrollTo } from "../../utils";
import { Sections } from "../../types";
import { Navbar } from "../Navbar";
import { Socials } from "../Socials";
import { Email } from "../Email";
import { SideArrow } from "../../images/SideArrow";

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
  animation: gradient 60s ease infinite;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
const WelcomeText = styled.h1`
  @font-face {
    font-family: "Roboto";
    src: url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.eot");
    src: url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.eot?#iefix")
        format("embedded-opentype"),
      url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.woff2")
        format("woff2"),
      url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.woff")
        format("woff"),
      url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.ttf")
        format("truetype"),
      url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.svg#Roboto")
        format("svg");
  }
  font-family: Roboto;
  color: white;
  font-size: 50px;
`;

const SideArrowContainer = styled.div`
  padding-left: 5px;
  transition: 0.5s;
`;
const WelcomeButtonContainer = styled.div`
  :hover {
    background-color: #3d3d3d;
    border-color: white;
    cursor: pointer;
  }
  :hover ${SideArrowContainer} {
    transform: rotate(90deg);
  }
  display: flex;
  flex-direction: row;
  background: transparent;
  border: 2px solid white;
  border-radius: 3px;
  height: 50px;
  color: white;
  width: auto;
  transition: 0.5s;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

const WelcomeButtonText = styled.div`
  font-size: 18px;
  font-family: Roboto;
`;
const PreviewsContainer = styled.div`
  align-items: center;
  font-size: 25px;
  justify-content: center;
  width: 100%;
  background-color: #2b2b2b;
`;

export const Homepage = () => {
  return (
    <HomepageContainer>
      <WelcomeTextContainer id={Sections.home}>
        <WelcomeText>
          Hi, I'm Nader Ebrahim.
          <br /> I'm a front-end developer.
        </WelcomeText>
        <WelcomeButtonContainer
          onClick={() => {
            ScrollTo(Sections.about);
          }}
        >
          <WelcomeButtonText>Learn more about me</WelcomeButtonText>
          <SideArrowContainer>
            <SideArrow />
          </SideArrowContainer>
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
