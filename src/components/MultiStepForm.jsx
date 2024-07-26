import React from "react";
import { Route, Router, Routes, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const FormContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const MultiStepForm = () => {
  // const { path } = useRouteMatch();

  return (
    <FormContainer>
      <Routes>
        <Route exact path={`/step1`} element={<Step1/>} />
        <Route path={`/step2`} element={<Step2/>} />
        <Route path={`/step3`} element={<Step3/>} />
        <Route path={`/step4`} element={<Step4/>} />
      </Routes>
    </FormContainer>
  );
};

export default MultiStepForm;
