import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  background-color: #f78888;
`;

export const About = () => {
  return (
    <section id="About">
      <AboutContainer>
        <h1>Hello, I'm Nader</h1>
        <img></img>
        <p>blah blah blah blah blah</p>
      </AboutContainer>
    </section>
  );
};
