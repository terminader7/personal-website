import React from "react";

export const JSCalculator = () => {
  const script = document.createElement("script");
  script.src = "/JSCalculatorBundle.js";
  script.async = true;
  document.body.appendChild(script);
  return (
    <>
      <div id="calculator"></div>
    </>
  );
};
