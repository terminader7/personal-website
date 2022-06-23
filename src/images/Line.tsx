import React from "react";
import styled from "styled-components";

const LogoItem = styled.svg``;

interface IProps {
  height?: string;
  width?: string;
}

export const Line = ({ height = "60px", width = "150px" }: IProps) => {
  return (
    <LogoItem
      width={width}
      height={height}
      viewBox="0 4 16 12"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#2b2b2b"
    >
      <path fill="#2b2b2b" d="M0 7h16v1h-16v-1z"></path>
    </LogoItem>
  );
};
