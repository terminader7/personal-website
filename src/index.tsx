import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Projects } from "./components/Pages/Projects";
import { Homepage } from "./components/Pages/Homepage";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Pages/Contact";
import { About } from "./components/Pages/About";

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
      <BrowserRouter>
        <Navbar />
        <Homepage />
      </BrowserRouter>
    </WebsiteContainer>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
