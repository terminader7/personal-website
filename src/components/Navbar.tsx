import React, { useState } from "react";
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
  z-index: 2;
  top: 0px;
  border-bottom: 3px solid #e73c7e;
  @font-face {
    font-family: "Roboto";
    src: url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.eot");
    src: url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.eot?#iefix")
        format("embedded-opentype"),
      url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.woff2")
        format("woff2"),
      url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.woff")
        format("woff"),
      url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.ttf")
        format("truetype"),
      url("//db.onlinewebfonts.com/t/0033a2fbc0329740fb86c1cfd134cb94.svg#Roboto")
        format("svg");
  }
  font-family: Roboto;
`;
const NavLink = styled.li`
  display: inline-block;
`;

const NavLinkItem = styled.div`
  text-decoration: none;
  color: white;
  :hover {
    color: #e73c7e;
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
