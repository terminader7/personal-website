import React from "react";
import styled from "styled-components";

const LogoItem = styled.svg`
  :hover {
    fill: #14a76c;
  }
  cursor: pointer;
  transition: fill 0.5s;
`;

interface IProps {
  height?: string;
  width?: string;
  onClick?: React.MouseEventHandler;
}

export const EmailLogo = ({
  height = "90px",
  width = "65px",
  onClick,
}: IProps) => {
  return (
    <LogoItem
      fill="white"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 96.264 96.264"
      onClick={onClick}
    >
      <g>
        <path
          d="M94.264,17.132H2c-1.104,0-2,0.896-2,2v58c0,1.104,0.896,2,2,2h92.264c1.104,0,2-0.896,2-2v-58
            C96.264,18.028,95.367,17.132,94.264,17.132z M90.929,34.825c0,0.548-0.299,1.052-0.778,1.315l-41.29,22.61
            c-0.225,0.123-0.473,0.185-0.721,0.185s-0.496-0.062-0.721-0.184L6.115,36.141c-0.481-0.263-0.78-0.768-0.78-1.316v-7.55
            c0-0.525,0.274-1.011,0.724-1.283c0.447-0.271,1.008-0.29,1.472-0.046l39.684,20.762c0.552,0.29,1.301,0.289,1.855-0.001
            l39.664-20.76c0.463-0.244,1.021-0.226,1.472,0.046c0.448,0.272,0.724,0.758,0.724,1.283L90.929,34.825L90.929,34.825z"
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
