import React from "react";

interface IProps {
  height?: string;
  width?: string;
  onClick?: React.MouseEventHandler;
}
export const Hamburger = ({
  height = "48px",
  width = "48px",
  onClick,
}: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      fill="#000000"
      onClick={onClick}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
};
