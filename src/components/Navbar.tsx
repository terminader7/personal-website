import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Hamburger } from "../images/Hamburger";

const NavbarContainer = styled.nav`
  background-color: #cc9a9a;
  color: black;
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const NavLink = styled.li`
  display: inline;
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
      <h1>Navbar</h1>
      <NavLinkList>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
            console.log(isOpen);
          }}
        >
          {!isOpen ? <Hamburger /> : "X"}
        </div>
        {isOpen && (
          <>
            <NavLink>
              <Link to="/">Home</Link>
            </NavLink>
            <NavLink>
              <Link to="/about">About</Link>
            </NavLink>
            <NavLink>
              <Link to="/projects">Projects</Link>
            </NavLink>
            <NavLink>
              <Link to="/contact">Contact</Link>
            </NavLink>
          </>
        )}
      </NavLinkList>
    </NavbarContainer>
  );
};
