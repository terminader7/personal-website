import React from "react";
import styled from "styled-components";

const LogoItem = styled.svg`
  cursor: pointer;
  color: white;
`;

interface IProps {
  height?: string;
  width?: string;
  onClick?: React.MouseEventHandler;
}

export const SideArrow = ({ height = "18px", width = "18px" }: IProps) => {
  return (
    <LogoItem
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 490 490"
      fill="white"
    >
      <g>
        <path
          d="M254.436,0H0.389l235.564,245L0.389,490h254.047l235.176-245L254.436,0z M72.316,459.375L278.451,245L72.316,30.625h169.08
		L447.173,245L241.396,459.375H72.316z"
        />
        <polygon
          points="168.378,72.734 295.204,204.638 334.016,245.004 295.204,285.369 168.381,417.266 222.833,417.266 
		388.195,245.003 222.833,72.734 	"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </LogoItem>
  );
};
