import React from "react";
import styled from "styled-components";
import { About } from "./About";

const NavbarContainer = styled.nav`
  background-color: red;
  color: white;
`;
export const Navbar = () => {
  return (
    <NavbarContainer>
      <h1>Navbar</h1>
    </NavbarContainer>
  );
};
