import React, { useState } from "react";
import styled from "styled-components";

import { Cottage } from "../images/Cottage";
import { Sections } from "../types";
import { ScrollTo } from "../utils";

const NavbarContainer = styled.nav`
  background-color: white;
  color: black;
  display: flex;
  flex-direction: row;
  height: 7vh;
  width: 100%;
`;
const NavLink = styled.li`
  display: inline-block;
`;
const LogoLink = styled.div`
  text-decoration: none;
  color: black;
  :hover {
    text-decoration: underline;
  }
`;
const NavLinkItem = styled.div`
  text-decoration: none;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
`;
const NavLinkList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  padding-right: 10px;
  width: 100%;
`;
export const Navbar = () => {
  return (
    <NavbarContainer>
      <h1>
        <LogoLink>
          <Cottage />
        </LogoLink>
      </h1>
      <NavLinkList>
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
