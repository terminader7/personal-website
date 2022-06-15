import React from "react";

export const Clock = () => {
  const script = document.createElement("script");
  script.src = "ClockBundle.js";
  script.async = true;
  document.body.appendChild(script);
  return (
    <>
      <div id="clock"></div>
    </>
  );
};
