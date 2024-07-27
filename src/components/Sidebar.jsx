import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaInfoCircle, FaLink, FaCogs, FaCheckCircle } from "react-icons/fa";
import { setCompletedStep, setCurrentStep } from "../Redux/action/action";

const SidebarContainer = styled.div`
  width: 250px; /* Increased width for better icon display */
  padding: 20px;
  background-color: #f7f7f7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add subtle shadow for depth */
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  position: relative;
  transition: background-color 0.3s ease;

  &.active {
    background-color: #e0e0e0;
    color: black;
  }

  &.completed {
    background-color: #e0ffe0;
    border-left: 4px solid green;
    color: green;

    &::before {
      content: "✔";
      color: green;
      font-weight: bold;
      margin-right: 10px;
      font-size: 18px;
    }
  }

  svg {
    margin-right: 10px;
    font-size: 1.2em;
  }
`;

const Sidebar = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.form.currentStep || 1);
  const completedSteps = useSelector((state) => state.form.completedSteps || []);

  const handleNavigation = (step) => {
    dispatch(setCurrentStep(step));
    // if (!completedSteps.includes(step)) {
    //   dispatch(setCompletedStep(step));
    // }
  };

  return (
    <SidebarContainer>
      <SidebarLink
        to="/step1"
        onClick={() => handleNavigation(1)}
        className={`step-link ${currentStep === 1 ? "active" : ""} ${
          completedSteps.includes(1) ? "completed" : ""
        }`}
      >
        <FaInfoCircle />
        App Details
      </SidebarLink>
      <SidebarLink
        to="/step2"
        onClick={() => handleNavigation(2)}
        className={`step-link ${currentStep === 2 ? "active" : ""} ${
          completedSteps.includes(2) ? "completed" : ""
        }`}
      >
        <FaLink />
        Repository URL
      </SidebarLink>
      <SidebarLink
        to="/step3"
        onClick={() => handleNavigation(3)}
        className={`step-link ${currentStep === 3 ? "active" : ""} ${
          completedSteps.includes(3) ? "completed" : ""
        }`}
      >
        <FaCogs />
        Build Settings
      </SidebarLink>
      <SidebarLink
        to="/step4"
        onClick={() => handleNavigation(4)}
        className={`step-link ${currentStep === 4 ? "active" : ""} ${
          completedSteps.includes(4) ? "completed" : ""
        }`}
      >
        <FaCheckCircle />
        Review and Submit
      </SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
