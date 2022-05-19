import { Sections } from "./types";

export const ScrollTo = (id: Sections) => {
  const section = document.getElementById(id);
  window.scrollTo({
    top: section?.offsetTop,
    left: 0,
    behavior: "smooth",
  });
};
