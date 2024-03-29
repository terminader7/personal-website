import React from "react";
import styled from "styled-components";
import { mobileMediaQuery } from "../constants";

const LogoItem = styled.svg`
  cursor: pointer;
  transition: 0.5s;
  height: 25px;
  width: 25px;
  ${mobileMediaQuery} {
    height: 30px;
    width: 30px;
  }
`;

interface IProps {
  height?: string;
  width?: string;
  onClick?: React.MouseEventHandler;
}

export const AppLink = ({ onClick }: IProps) => {
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
      onClick={onClick}
    >
      <title>External Link</title>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </LogoItem>
  );
};
