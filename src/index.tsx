import React from "react";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Homepage } from "./components/Homepage";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Contact";

import styled from "styled-components";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const WebsiteContainer = styled.div``;

export const App = () => {
  return (
    <WebsiteContainer>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </WebsiteContainer>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
