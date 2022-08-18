import React from "react";
import styled from "styled-components";
import { mobileMediaQuery } from "../constants";

import { Sections } from "../types";
import { ScrollTo } from "../utils";

const NavbarContainer = styled.nav`
  display: flex;
  background-color: #2b2b2b;
  color: white;
  flex-direction: row;
  height: 40px;
  width: 100%;
  position: sticky;
  z-index: 3;
  top: 0px;
  border-bottom: 1px solid #00db8b;
  font-family: Bahnschrift;
  ${mobileMediaQuery} {
  }
`;

const NavLinkList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  font-size: 20px;
  padding-left: 85px;
  ${mobileMediaQuery} {
    font-size: 18px;
    gap: 25px;
    justify-content: center;
    padding-left: 0px;
  }
`;
const NavLinkItem = styled.div`
  display: inline-block;
  text-decoration: none;
  color: white;
  :hover {
    color: #a5f0d5;
    cursor: pointer;
  }
  transition: 0.5s;
  ${mobileMediaQuery} {
    gap: 20px;
  }
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLinkList>
        <NavLinkItem
          onClick={() => {
            ScrollTo(Sections.home);
          }}
        >
          Home
        </NavLinkItem>
        <NavLinkItem
          onClick={() => {
            ScrollTo(Sections.about);
          }}
        >
          About
        </NavLinkItem>
        <NavLinkItem
          onClick={() => {
            ScrollTo(Sections.projects);
          }}
        >
          Projects
        </NavLinkItem>
        <NavLinkItem
          onClick={() => {
            ScrollTo(Sections.contact);
          }}
        >
          Contact
        </NavLinkItem>
      </NavLinkList>
    </NavbarContainer>
  );
};
