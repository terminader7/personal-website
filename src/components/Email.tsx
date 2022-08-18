import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { mobileMediaQuery } from "../constants";
import { deviceType } from "../utils";

const EmailContainer = styled(motion.div)`
  display: flex;
  position: fixed;
  z-index: 3;
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
  ${mobileMediaQuery} {
    right: 13px;
  }
`;

const EmailItem = styled(motion.div)`
  :hover {
    opacity: 1;
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
  ${mobileMediaQuery} {
    font-size: 11px;
  }
`;

const VeritcalLine = styled.div`
  border-left: 1px solid white;
  height: 120px;
  ${mobileMediaQuery} {
    height: 60px;
  }
`;

export const Email = () => {
  const appearVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1 },
  };
  const device = deviceType();

  if (device === "mobile" || device === "tablet") {
    return <></>;
  } else {
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
  }
};
