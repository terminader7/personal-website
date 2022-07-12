import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

import { Sections } from "../../types";
import { ReactLogo } from "../../images/ReactLogo";
import { JSLogo } from "../../images/JSLogo";
import { HTMLLogo } from "../../images/HTMLLogo";
import { CSSLogo } from "../../images/CSSLogo";
import { NodeJSLogo } from "../../images/NodeJSLogo";
import { TypeScriptLogo } from "../../images/TypeScriptLogo";
import { GetBaseImgPath } from "../../utils";
import { Line } from "../../images/Line";

const AboutContainer = styled.div`
  background-color: #2b2b2b;
  height: fit-content;
  width: 100%;
  font-family: Roboto;
  padding-bottom: 100px;
`;

const AboutHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AboutTitleText = styled(motion.div)`
  color: white;
  font-family: inherit;
  font-size: 30pt;
  font-weight: bold;
  position: relative;
  padding-top: 40px;
`;

const AboutContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-around;
  font-family: inherit;
`;
const BioContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  padding-bottom: 60px;
`;
const PictureOfMe = styled.img`
  height: 400px;
  width: 400px;
  border-radius: 7px;
`;
const BioTextContainer = styled.div`
  display: flex;
  background-color: #3d3d3d;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  width: 700px;
  height: auto;
  padding: 20px;
`;
const BioText = styled.div`
  font-size: 20px;
  color: white;
  justify-content: flex-start;
`;
const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  padding-top: 40px;
  gap: 10px;
  font-family: inherit;
  border: 2px #00db8b solid;
  border-radius: 5px;
  padding: 20px;
  margin: auto;
  position: relative;
`;
const SkillsItemsTitleText = styled.div`
  display: flex;
  color: white;
  font-weight: bold;
  font-size: 30px;
  align-items: center;
  justify-content: center;
`;
const SkillsItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 60px;
`;
const SkillsItemRow = styled.div`
  display: flex;
  padding-top: 30px;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const SkillsItemList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(140px, 200px));
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const About = () => {
  return (
    <AboutContainer id={Sections.about}>
      <AboutHeaderContainer>
        <AboutTitleText>About Me</AboutTitleText>
        <Line />
      </AboutHeaderContainer>
      <AboutContentContainer>
        <BioContainer>
          <BioTextContainer>
            <BioText>
              Hello! My name's Nader and I'm a self-taught, front-end developer
              from Southern California. Crafting a fun yet beautifully simple
              user experience is what I aim for with all of my projects.
              <br /> I'm regularly working on improving my skills and furthering
              my development, one design problem at a time.{" "}
            </BioText>
          </BioTextContainer>
          <PictureOfMe src={`${GetBaseImgPath()}/pictureOfMe.jpg`} />
        </BioContainer>
        <SkillsContainer>
          <SkillsItemsTitleText>Skills</SkillsItemsTitleText>
          <SkillsItem>
            <SkillsItemList>
              <SkillsItemRow>
                <ReactLogo /> React
              </SkillsItemRow>
              <SkillsItemRow>
                <JSLogo /> JavaScript
              </SkillsItemRow>
              <SkillsItemRow>
                <HTMLLogo /> HTML
              </SkillsItemRow>
            </SkillsItemList>
            <SkillsItemList>
              <SkillsItemRow>
                <CSSLogo /> CSS
              </SkillsItemRow>
              <SkillsItemRow>
                <TypeScriptLogo /> TypeScript
              </SkillsItemRow>
              <SkillsItemRow>
                <NodeJSLogo /> Node.js
              </SkillsItemRow>
            </SkillsItemList>
          </SkillsItem>
        </SkillsContainer>
      </AboutContentContainer>
    </AboutContainer>
  );
};
