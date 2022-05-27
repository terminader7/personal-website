import React from "react";
import styled from "styled-components";

import { Sections } from "../../types";
import { ReactLogo } from "../../images/ReactLogo";
import { JSLogo } from "../../images/JSLogo";
import { HTMLLogo } from "../../images/HTMLLogo";
import { CSSLogo } from "../../images/CSSLogo";

const AboutContainer = styled.div`
  background-color: #ebf5ee;
  height: 70vh;
  width: 100%;
`;
const AboutTitleText = styled.div`
  color: #2b2b2b;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30pt;
  font-weight: bold;
  position: relative;
  padding-top: 40px;
`;
const AboutContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: gray;
  gap: 20px;
  justify-content: center;
`;
const BioContainer = styled.div`
  flex-direction: column;
  justify-content: flex-start;
`;
const BioText = styled.div`
  font-size: 20px;
  color: #2b2b2b;
`;
const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const SkillsItemsText = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 30px;
`;
const SkillsItem = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
`;
const SkillsItemRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const About = () => {
  return (
    <AboutContainer id={Sections.about}>
      <AboutTitleText>About</AboutTitleText>
      <AboutContentContainer>
        <BioContainer>
          <img src="./dist/images/pictureOfMe.jpg" />
          <BioText>
            Nice to meet you! <br />
            I'm a self-taught, front-end developer from Southern California.{" "}
            <br />I have a serious passion for crafting a fun, yet beautifully
            simple user experience.
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
          </SkillsItem>
        </SkillsContainer>
      </AboutContentContainer>
    </AboutContainer>
  );
};
