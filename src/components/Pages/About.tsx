import React from "react";
import styled from "styled-components";
import { Sections } from "../../types";

const AboutContainer = styled.div`
  background-color: #ebf5ee;
  height: 100vh;
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
const BioContainer = styled.div``;
const BioText = styled.div`
  font-size: 20px;
  color: #2b2b2b;
`;
const SkillsContainer = styled.div``;
const SkillsItems = styled.div``;
export const About = () => {
  return (
    <AboutContainer id={Sections.about}>
      <AboutTitleText>About</AboutTitleText>
      <BioContainer>
        <BioText>
          Nice to meet you! <br />
          I'm a self-taught, front-end developer from Southern California.{" "}
          <br />I have a serious passion for crafting a fun, yet beautifully
          simple user experience.
          <br /> I'm regularly working on improving my skills and furthering my
          development, <br /> one design problem at a time{" "}
        </BioText>
      </BioContainer>
    </AboutContainer>
  );
};
