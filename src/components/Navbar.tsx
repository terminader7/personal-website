import React from "react";
import styled from "styled-components";

import { Sections } from "../types";
import { ScrollTo } from "../utils";

const NavbarContainer = styled.nav`
  background-color: #2b2b2b;
  color: white;
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 100%;
  position: sticky;
  z-index: 3;
  top: 0px;
  border-bottom: 1px solid #00db8b;
  font-family: Bahnschrift;
`;
const NavLink = styled.li`
  display: inline-block;
`;

const NavLinkItem = styled.div`
  text-decoration: none;
  color: white;
  :hover {
    color: #a5f0d5;
    cursor: pointer;
  }
  transition: 0.5s;
`;
const NavLinkList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  font-size: 20px;
`;
export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLinkList>
        <NavLink>
          <NavLinkItem
            onClick={() => {
              ScrollTo(Sections.home);
            }}
          >
            Home
          </NavLinkItem>
        </NavLink>
        <NavLink>
          <NavLinkItem
            onClick={() => {
              ScrollTo(Sections.about);
            }}
          >
            About
          </NavLinkItem>
        </NavLink>
        <NavLink>
          <NavLinkItem
            onClick={() => {
              ScrollTo(Sections.projects);
            }}
          >
            Projects
          </NavLinkItem>
        </NavLink>
        <NavLink>
          <NavLinkItem
            onClick={() => {
              ScrollTo(Sections.contact);
            }}
          >
            Contact
          </NavLinkItem>
        </NavLink>
      </NavLinkList>
    </NavbarContainer>
  );
};
