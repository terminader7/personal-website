import { Sections } from "./types";

export const ScrollTo = (id: Sections) => {
  const section = document.getElementById(id);
  window.scrollTo({
    top: section?.offsetTop,
    left: 0,
    behavior: "smooth",
  });
};

export const IsInDev = (): boolean => process.env.NODE_ENV === "development";

export const GetBaseImgPath = (): string => {
  if (IsInDev()) {
    return "images";
  }
  return "dist/images";
};
