import React from "react";
import styled from "styled-components";

const LogoItem = styled.svg`
  :hover {
    fill: #2bbd7e;
  }
  transition: 0.5s;
  cursor: pointer;
`;

interface IProps {
  height?: string;
  width?: string;
  onClick?: React.MouseEventHandler;
}

export const Resume = ({
  height = "80px",
  width = "80px",
  onClick,
}: IProps) => {
  return (
    <LogoItem
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      fill="white"
      onClick={onClick}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </LogoItem>
  );
};
