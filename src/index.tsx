import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Homepage } from "./components/Sections/Homepage";
import { JSCalculator } from "./components/Embedded-projects/JSCalculator";
import { Clock } from "./components/Embedded-projects/Clock";
import { DrumMachine } from "./components/Embedded-projects/DrumMachine";
import { GithubFinder } from "./components/Embedded-projects/GithubFinder";

const WebsiteContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
`;

export const App = () => {
  return (
    <WebsiteContainer>
      <Router>
        <Routes>
          <Route path="/personal-site" element={<Homepage />} />
          <Route
            path="/personal-site/jscalculator"
            element={<JSCalculator />}
          />
          <Route path="/personal-site/clock" element={<Clock />} />
          <Route path="/personal-site/drummachine" element={<DrumMachine />} />
          <Route
            path="/personal-site/githubfinder"
            element={<GithubFinder />}
          />
        </Routes>
      </Router>
    </WebsiteContainer>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
