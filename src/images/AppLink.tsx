import React from "react";
import styled from "styled-components";

const LogoItem = styled.svg`
  :hover {
    cursor: pointer;
    color: #14a76c;
  }
  transition: 0.5s;
`;

interface IProps {
  height?: string;
  width?: string;
  onClick?: React.MouseEventHandler;
}

export const AppLink = ({
  height = "25px",
  width = "25px",
  onClick,
}: IProps) => {
  return (
    <LogoItem
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      height={height}
      width={width}
      onClick={onClick}
    >
      <title>External Link</title>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </LogoItem>
  );
};
