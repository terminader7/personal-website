import React, { useEffect } from "react";
import styled from "styled-components";
import { mobileMediaQuery } from "../../constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { ReactLogo } from "../../images/ReactLogo";
import { JSLogo } from "../../images/JSLogo";
import { HTMLLogo } from "../../images/HTMLLogo";
import { CSSLogo } from "../../images/CSSLogo";
import { NodeJSLogo } from "../../images/NodeJSLogo";
import { TypeScriptLogo } from "../../images/TypeScriptLogo";

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
  padding: 10px;
  margin: auto;
  position: relative;
  ${mobileMediaQuery} {
    width: fit-content;
    gap: 0px;
  }
`;
const SkillsItemsTitleText = styled(motion.div)`
  display: flex;
  color: white;
  font-weight: bold;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  ${mobileMediaQuery} {
    font-size: 25px;
  }
`;
const SkillsItem = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
  gap: 40px;
  ${mobileMediaQuery} {
    gap: 10px;
    padding: 0px;
  }
`;
const SkillsItemRow = styled(motion.div)`
  display: flex;
  padding-top: 30px;
  flex-direction: row;
  gap: 10px;
  padding-left: 20px;
  align-items: center;
  ${mobileMediaQuery} {
    font-size: 20px;
    gap: 5px;
  }
`;

const SkillsItemList = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: start;
  justify-content: flex-start;
  padding-bottom: 10px;
  ${mobileMediaQuery} {
    grid-template-columns: repeat(1);
  }
`;

export const Skills = () => {
  const control = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [inView]);

  const appearFromBottomVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };
  return (
    <SkillsContainer
      ref={ref}
      variants={appearFromBottomVariant}
      initial="hidden"
      transition={{ duration: 1 }}
      animate={control}
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
  );
};
