import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EmailContainer = styled(motion.div)`
  display: flex;
  position: fixed;
  z-index: 0;
  flex-direction: column;
  width: fit-content;
  justify-content: space-evenly;
  gap: 20px;
  right: 50px;
  bottom: 13px;
  justify-content: flex-end;
  width: auto;
  height: auto;
  background-color: transparent;
  align-items: center;
`;

const EmailItem = styled(motion.div)`
  :hover {
    opacity: 1;
  }
  @font-face {
    font-family: "Bahnschrift";
    src: url("//db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.eot");
    src: url("//db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.eot?#iefix")
        format("embedded-opentype"),
      url("//db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.woff2")
        format("woff2"),
      url("//db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.woff")
        format("woff"),
      url("//db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.ttf")
        format("truetype"),
      url("//db.onlinewebfonts.com/t/0a6ee448d1bd65c56f6cf256a7c6f20a.svg#Bahnschrift")
        format("svg");
  }
  font-family: Bahnschrift;
  color: white;
  font-size: 18px;
  font-weight: lighter;
  writing-mode: vertical-lr;
  transition: 0.5s;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s;
`;

const VeritcalLine = styled.div`
  border-left: 1px solid white;
  height: 120px;
`;

export const Email = () => {
  const appearVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1 },
  };
  return (
    <EmailContainer
      variants={appearVariant}
      initial="hidden"
      animate="visible"
      transition={{ duration: 3 }}
    >
      <EmailItem
        onClick={() => {
          window.open("mailto:nebrahim2424@gmail.com");
        }}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", duration: 0.02 }}
      >
        nebrahim2424@gmail.com
      </EmailItem>
      <VeritcalLine />
    </EmailContainer>
  );
};
