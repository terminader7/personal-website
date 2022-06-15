import React from "react";

export const DrumMachine = () => {
  const script = document.createElement("script");
  script.src = "DrumMachineBundle.js";
  script.async = true;
  document.body.appendChild(script);
  return (
    <>
      <div id="drummachine"></div>
    </>
  );
};
