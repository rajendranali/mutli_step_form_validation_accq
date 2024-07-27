import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const FormContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const MultiStepForm = () => {
  const currentStep = useSelector((state) => state.form.currentStep);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        return <Step1 />;
    }
  };

  return <FormContainer>{renderStep()}</FormContainer>;
};

export default MultiStepForm;
