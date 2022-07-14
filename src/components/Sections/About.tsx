import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Sections } from "../../types";
import { ReactLogo } from "../../images/ReactLogo";
import { JSLogo } from "../../images/JSLogo";
import { HTMLLogo } from "../../images/HTMLLogo";
import { CSSLogo } from "../../images/CSSLogo";
import { NodeJSLogo } from "../../images/NodeJSLogo";
import { TypeScriptLogo } from "../../images/TypeScriptLogo";
import { GetBaseImgPath } from "../../utils";

const AboutContainer = styled(motion.div)`
  background-color: #2b2b2b;
  height: fit-content;
  width: 100%;
  font-family: Bahnschrift;
  padding-bottom: 100px;
`;

const AboutHeaderContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
`;

const AboutTitleText = styled(motion.div)`
  color: white;
  font-family: inherit;
  font-size: 30pt;
  font-weight: bold;
  position: relative;
  padding-top: 60px;
  padding-bottom: 15px;
`;

const HorizontalLine = styled(motion.div)`
  border-bottom: 2px solid #00db8b;
  width: 125px;
`;
const AboutContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-around;
  font-family: inherit;
`;
const BioContainer = styled(motion.div)`
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  padding-bottom: 60px;
`;
const AccentBox = styled(motion.div)`
  z-index: 0;
  position: absolute;
  top: 15px;
  left: 15px;
  height: 400px;
  width: 400px;
  border: 2px solid #00db8b;
  border-radius: 7px;
  opacity: 1;
  transition: 0.25s ease-in-out;
`;
const PictureOfMeContainer = styled(motion.div)`
  :hover ${AccentBox} {
    top: 10px;
    left: 10px;
  }
  position: relative;
  border-radius: 7px;
  height: 400px;
  width: fit-content;
  transition: 0.25s ease-in-out;
`;
const PictureOfMe = styled(motion.img)`
  z-index: 2;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  position: relative;
  height: 400px;
  width: 400px;
  border-radius: 7px;
  transition: ease-in-out;
`;
const BioTextContainer = styled(motion.div)`
  display: flex;
  background-color: #3d3d3d;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  width: 500px;
  height: auto;
  padding: 20px;
  transition: ease-in-out;
`;
const BioText = styled(motion.div)`
  font-size: 17px;
  color: white;
  justify-content: flex-start;
`;
const SkillsContainer = styled(motion.div)`
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
const SkillsItemsTitleText = styled(motion.div)`
  display: flex;
  color: white;
  font-weight: bold;
  font-size: 30px;
  align-items: center;
  justify-content: center;
`;
const SkillsItem = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 60px;
`;
const SkillsItemRow = styled(motion.div)`
  display: flex;
  padding-top: 30px;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const SkillsItemList = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(1, minmax(140px, 200px));
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const About = () => {
  const control = useAnimation();

  const control2 = useAnimation();

  const [ref, inView] = useInView({ threshold: 0.1 });

  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [inView]);

  useEffect(() => {
    if (inView2) {
      control2.start("visible");
    }
  });

  const appearVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1 },
  };
  const slideInLeftVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -200 },
  };
  const slideInRightVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 200 },
  };

  const appearFromBottomVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };
  return (
    <AboutContainer id={Sections.about}>
      <AboutHeaderContainer>
        <AboutTitleText>About Me</AboutTitleText>
        <HorizontalLine />
      </AboutHeaderContainer>
      <AboutContentContainer>
        <BioContainer>
          <BioTextContainer
            ref={ref}
            variants={slideInLeftVariant}
            initial="hidden"
            animate={control}
            transition={{ duration: 1.5 }}
          >
            <BioText>
              Hello! My name's Nader and I'm a self-taught, front-end developer
              from Southern California. My main goal with web design is crafting
              a fun yet beautifully simple user experience. To put it plainly,
              I'm a big believer that less is more.
              <br />
              <br />
              I attended San Francisco State University and initially got my
              Bachelor's in Communications but, I always had a passing
              fascination in programming. In 2021, I decided to turn my interest
              into a profession and dive in head first.
              <br /> <br />
              I'm regularly working on improving my skills and furthering my
              development, one design problem at a time.
            </BioText>
          </BioTextContainer>
          <PictureOfMeContainer>
            <PictureOfMe
              ref={ref}
              variants={slideInRightVariant}
              initial="hidden"
              animate={control}
              transition={{ duration: 1.5 }}
              src={`${GetBaseImgPath()}/pictureOfMe.jpg`}
            />
            <AccentBox
              ref={ref}
              variants={appearVariant}
              initial="hidden"
              animate={control}
              transition={{ duration: 3 }}
            />
          </PictureOfMeContainer>
        </BioContainer>
        <SkillsContainer
          ref={ref2}
          variants={appearFromBottomVariant}
          initial="hidden"
          transition={{ duration: 1 }}
          animate={control2}
        >
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
