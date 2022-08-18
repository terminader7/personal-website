import React from "react";
import styled from "styled-components";
import { mobileMediaQuery, tabletMediaQuery } from "../constants";

const LogoItem = styled.svg`
  height: 50px;
  width: 40px;
  cursor: pointer;
  ${mobileMediaQuery} {
    height: 40px;
    width: 30px;
  }
  ${tabletMediaQuery} {
  }
`;

interface IProps {
  onClick?: React.MouseEventHandler;
}

export const UpArrow = ({ onClick }: IProps) => {
  return (
    <LogoItem
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 49 49"
      fill="white"
      onClick={onClick}
    >
      <g>
        <g>
          <path
            d="M1.277,29.998h46c0.432,0,0.814-0.277,0.95-0.687s-0.008-0.86-0.355-1.117l-23-17c-0.353-0.261-0.836-0.261-1.188,0
			l-23,17c-0.347,0.257-0.491,0.707-0.356,1.117S0.846,29.998,1.277,29.998z M24.277,13.242l19.965,14.756H4.313L24.277,13.242z"
          />
          <path
            d="M48,32.001H1c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h47c0.552,0,1-0.448,1-1v-4C49,32.449,48.552,32.001,48,32.001z
			 M47,36.001H2v-2h45V36.001z"
          />
        </g>
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
