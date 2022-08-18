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

export const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};
