import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Navbar = () => (
  <NavbarContainer>
    <h1>Multi-Step Form</h1>
  </NavbarContainer>
);

export default Navbar;
