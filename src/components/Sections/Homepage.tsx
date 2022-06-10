import React from "react";
import styled from "styled-components";

import { Contact } from "./Contact";
import { About } from "./About";
import { Projects } from "./Projects";
import { ScrollTo } from "../../utils";
import { Sections } from "../../types";
import { Navbar } from "../Navbar";

const HomepageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const WelcomeTextContainer = styled.div`
  display: flex;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
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
const WelcomeButton = styled.button`
  background: transparent;
  border: 2px solid white;
  color: white;
  font-size: 16px;
  font-weight: bold;
  font-family: Roboto;
  padding: 15px;
  height: 50px;
  width: fit-content;
  :hover {
    color: #e73c7e;
    background-color: white;
    border-color: #e73c7e;
    cursor: pointer;
  }
  transition: background-color 0.5s;
`;
const PreviewsContainer = styled.div`
  align-items: center;
  text-align: center;
  font-size: 25px;
  justify-content: center;
  width: 100%;
`;

export const Homepage = () => {
  return (
    <HomepageContainer>
      <WelcomeTextContainer id={Sections.home}>
        <WelcomeText>
          Hello, I'm Nader Ebrahim.
          <br /> I'm a front-end developer
        </WelcomeText>
        <WelcomeButton
          onClick={() => {
            ScrollTo(Sections.about);
          }}
        >
          Learn more about me
        </WelcomeButton>
      </WelcomeTextContainer>
      <Navbar />
      <PreviewsContainer>
        <About />
        <Projects />
        <Contact />
      </PreviewsContainer>
    </HomepageContainer>
  );
};
