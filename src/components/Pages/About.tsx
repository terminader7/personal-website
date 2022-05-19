import React from "react";
import styled from "styled-components";
import { Sections } from "../../types";

const AboutContainer = styled.div`
  background-color: #f78888;
  height: 100vh;
  width: 100%;
`;
export const About = () => {
  return (
    <AboutContainer id={Sections.about}>
      <div>About</div>
    </AboutContainer>
  );
};
