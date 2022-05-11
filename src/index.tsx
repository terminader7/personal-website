import React from "react";
import { Website } from "./components/Website";
import styled from "styled-components";
import ReactDOM from "react-dom";

export const App = () => {
  return (
    <div>
      <Website />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
