import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const EmailContainer = styled.div`
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
  font-size: 18px;
  font-weight: lighter;
  writing-mode: vertical-lr;
  transition: 0.5s;
  cursor: pointer;
`;

const VeritcalLine = styled.div`
  border-left: 1px solid white;
  height: 120px;
`;

export const Email = () => {
  return (
    <EmailContainer>
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
