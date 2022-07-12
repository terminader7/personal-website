import React from "react";
import styled from "styled-components";

const LogoItem = styled.svg`
  :hover {
    color: #00db8b;
  }
  color: white;
`;

interface IProps {
  height?: string;
  width?: string;
  onClick?: React.MouseEventHandler;
}

export const Linkedin = ({
  height = "25px",
  width = "25px",
  onClick,
}: IProps) => {
  return (
    <LogoItem
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      onClick={onClick}
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </LogoItem>
  );
};
