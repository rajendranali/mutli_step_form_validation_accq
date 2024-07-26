import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: #f4f4f4;
  width: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const SidebarLink = styled(NavLink)`
  margin-bottom: 10px;
  padding: 10px;
  color: #333;
  text-decoration: none;
  border-radius: 4px;

  &.active {
    background-color: #007bff;
    color: white;
  }
`;

const Sidebar = () => (
  <SidebarContainer>
    <SidebarLink to="/step1">Step 1</SidebarLink>
    <SidebarLink to="/step2">Step 2</SidebarLink>
    <SidebarLink to="/step3">Step 3</SidebarLink>
    <SidebarLink to="/step4">Step 4</SidebarLink>
  </SidebarContainer>
);

export default Sidebar;
