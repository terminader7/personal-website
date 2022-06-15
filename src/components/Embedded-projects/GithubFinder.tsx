import React from "react";

export const GithubFinder = () => {
  const script = document.createElement("script");
  script.src = "GithubFinderBundle.js";
  script.async = true;
  document.body.appendChild(script);
  return (
    <>
      <div id="githubfinder"></div>
    </>
  );
};
