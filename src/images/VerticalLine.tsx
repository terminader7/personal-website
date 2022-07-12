import React from "react";
import styled from "styled-components";

const LogoItem = styled.svg``;

interface IProps {
  height?: string;
  width?: string;
}

export const VerticalLine = ({ height = "200px", width = "45px" }: IProps) => {
  return (
    <LogoItem
      width={width}
      height={height}
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="white" d="M8 0h1v16h-1v-16z"></path>
    </LogoItem>
  );
};
