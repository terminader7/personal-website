import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Hamburger } from "../images/Hamburger";
import { Cottage } from "../images/Cottage";

const NavbarContainer = styled.nav`
  background-color: #ececec;
  color: black;
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const NavLink = styled.li`
  display: inline-block;
`;
const LogoLink = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    text-decoration: underline;
  }
`;
const NavLinkItem = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
`;
const MenuItem = styled.div`
  font-weight: bold;
`;
const NavLinkList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 5px;
  padding-right: 10px;
`;
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <h1>
        <LogoLink to="/">
          <Cottage />
        </LogoLink>
      </h1>
      <NavLinkList>
        <MenuItem
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {!isOpen ? <Hamburger /> : "X"}
        </MenuItem>
        {isOpen && (
          <>
            <NavLink>
              <NavLinkItem to="/about">About</NavLinkItem>
            </NavLink>
            <NavLink>
              <NavLinkItem to="/projects">Projects</NavLinkItem>
            </NavLink>
            <NavLink>
              <NavLinkItem to="/contact">Contact</NavLinkItem>
            </NavLink>
          </>
        )}
      </NavLinkList>
    </NavbarContainer>
  );
};
