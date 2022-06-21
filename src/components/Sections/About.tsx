import React from "react";
import styled from "styled-components";

import { Sections } from "../../types";
import { ReactLogo } from "../../images/ReactLogo";
import { JSLogo } from "../../images/JSLogo";
import { HTMLLogo } from "../../images/HTMLLogo";
import { CSSLogo } from "../../images/CSSLogo";
import { TypeScriptLogo } from "../../images/TypeScriptLogo";
import { GetBaseImgPath } from "../../utils";

const AboutContainer = styled.div`
  background-color: #ebf5ee;
  height: 70vh;
  width: 100%;
  font-family: Roboto;
  .fade-in {
    animation: fadeIn 5s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const AboutTitleText = styled.div`
  color: #2b2b2b;
  font-family: inherit;
  font-size: 30pt;
  font-weight: bold;
  position: relative;
  padding-top: 40px;
`;
const AboutContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-around;
  font-family: inherit;
`;
const BioContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BioPictureText = styled.div`
  font-size: 25px;
  color: #2b2b2b;
  font-weight: bold;
  padding-top: 10px;
  font-family: Roboto;
`;
const BioText = styled.div`
  font-size: 20px;
  color: #2b2b2b;
`;
const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  gap: 10px;
  font-family: inherit;
`;
const SkillsItemsText = styled.div`
  color: #2b2b2b;
  font-weight: bold;
  font-size: 30px;
`;
const SkillsItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const SkillsItemRow = styled.div`
  display: flex;
  padding-top: 30px;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
const PictureOfMe = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 50%;
`;
export const About = () => {
  return (
    <AboutContainer id={Sections.about}>
      <AboutTitleText>About</AboutTitleText>
      <AboutContentContainer>
        <BioContainer>
          <PictureOfMe src={`${GetBaseImgPath()}/pictureOfMe.jpg`} />
          <BioPictureText>Nice to meet you!</BioPictureText>
          <BioText>
            I'm a self-taught, front-end developer from Southern California.{" "}
            <br />
            Crafting a fun, yet beautifully simple user experience is what I aim
            for with all of my projects.
            <br /> I'm regularly working on improving my skills and furthering
            my development, one design problem at a time{" "}
          </BioText>
        </BioContainer>
        <SkillsContainer>
          <SkillsItemsText>Skills</SkillsItemsText>
          <SkillsItem>
            <SkillsItemRow>
              <ReactLogo /> React
            </SkillsItemRow>
            <SkillsItemRow>
              <JSLogo /> JavaScript
            </SkillsItemRow>
            <SkillsItemRow>
              <HTMLLogo /> HTML
            </SkillsItemRow>
            <SkillsItemRow>
              <CSSLogo /> CSS
            </SkillsItemRow>
            <SkillsItemRow>
              <TypeScriptLogo /> TypeScript
            </SkillsItemRow>
          </SkillsItem>
        </SkillsContainer>
      </AboutContentContainer>
    </AboutContainer>
  );
};
