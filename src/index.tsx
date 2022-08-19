import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GlobalFont from "./globalFont";
import { Homepage } from "./components/sections/Homepage";

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
      <GlobalFont />
      <Router>
        <Routes>
          <Route path="/personal-website" element={<Homepage />} />
        </Routes>
      </Router>
    </WebsiteContainer>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
