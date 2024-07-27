import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

import { SubmitButton } from './Step1';
import { saveFormData, setCompletedStep, setCurrentStep } from '../Redux/action/action';

// Styled components
const Container = styled.div`
  max-width: 800px;
//   margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
`;

const ReviewContainer = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  /* Removed border and set padding */
`;

const SectionTitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const SectionContent = styled.p`
  margin: 5px 0;
  color: #4F1787;
  text-align: left; /* Ensure left alignment */
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
//   justify-content: space-between;
`;

const validationSchema = Yup.object({
  appName: Yup.string().required('App Name is required'),
  appDescription: Yup.string().required('App Description is required'),
  repoUrl: Yup.string().url('Invalid URL').required('Repository URL is required'),
  branch: Yup.string().required('Branch is required'),
  buildCommands: Yup.string(),
  envVariables: Yup.string(),
});

const Step4 = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => ({
    ...state.form.step1,
    ...state.form.step2,
    ...state.form.step3,
  }));

  const handleSubmit = (values) => {
    dispatch(saveFormData(values)); 
    dispatch(setCompletedStep(4));
    alert('Form submitted and data saved: ' + JSON.stringify(values, null, 2));
  };

  return (
    <Container>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {() => (
          <Form>
            <h2 style={{ textAlign: 'left' }}>Review and Submit</h2> {/* Changed alignment */}
            <ReviewContainer>
              <SectionTitle>App Details</SectionTitle>
              <SectionContent><strong >App Name:</strong> {formData.appName}</SectionContent>
              <SectionContent><strong>App Description:</strong> {formData.appDescription}</SectionContent>
            </ReviewContainer>
            <ReviewContainer>
              <SectionTitle>Repository Configuration</SectionTitle>
              <SectionContent><strong>Repository URL:</strong> {formData.repoUrl}</SectionContent>
              <SectionContent><strong>Branch:</strong> {formData.branch}</SectionContent>
            </ReviewContainer>
            <ReviewContainer>
              <SectionTitle>Build Settings</SectionTitle>
              <SectionContent><strong>Build Commands:</strong> {formData.buildCommands}</SectionContent>
              <SectionContent><strong>Environment Variables:</strong> {formData.envVariables}</SectionContent>
            </ReviewContainer>
            <ButtonContainer>
              <SubmitButton
                type="button"
                onClick={() => {
                  dispatch(setCurrentStep(3));
                }}
              >
                Previous
              </SubmitButton>
              <SubmitButton type="submit">
                Submit All
              </SubmitButton>
            </ButtonContainer>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Step4;
