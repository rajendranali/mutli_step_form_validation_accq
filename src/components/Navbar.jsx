import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: #f0f0f0; 
  color: #4F1787; 
  padding: 10px 20px; 
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  height: 30px; 
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px; 
  color:#4F1787
`;

const Navbar = () => (
  <NavbarContainer>
    <h2>AWS Amplify</h2>
    <ButtonGroup>
      <button style={{border:"none",color:"#4F1787"}}>Docs</button>
      <button style={{border:"none",color:"#4F1787"}}>Support</button>
    </ButtonGroup>
  </NavbarContainer>
);

export default Navbar;
