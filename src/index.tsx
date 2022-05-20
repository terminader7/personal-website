import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

import { Homepage } from "./components/Sections/Homepage";

const WebsiteContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  position: absolute;
  height: 100vh;
`; //page scrolls left to right, fix that

export const App = () => {
  return (
    <WebsiteContainer>
      <Homepage />
    </WebsiteContainer>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
