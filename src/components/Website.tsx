import React from "react";
import styled from "styled-components";
import { Homepage } from "./Homepage";
import { About } from "./About";

const WebsiteContainer = styled.div``;

export const Website = () => {
  return (
    <WebsiteContainer>
      <Homepage />
      <About />
    </WebsiteContainer>
  );
};
