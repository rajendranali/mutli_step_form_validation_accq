import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const ReviewContainer = styled.div`
  margin-bottom: 16px;
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
  return (
    <Formik
      initialValues={{
        appName: '',
        appDescription: '',
        repoUrl: '',
        branch: '',
        buildCommands: '',
        envVariables: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert('Form submitted: ' + JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <h2>Review and Submit</h2>
          <ReviewContainer>
            <h3>App Details</h3>
            <p><strong>App Name:</strong> {values.appName}</p>
            <p><strong>App Description:</strong> {values.appDescription}</p>
          </ReviewContainer>
          <ReviewContainer>
            <h3>Repository Configuration</h3>
            <p><strong>Repository URL:</strong> {values.repoUrl}</p>
            <p><strong>Branch:</strong> {values.branch}</p>
          </ReviewContainer>
          <ReviewContainer>
            <h3>Build Settings</h3>
            <p><strong>Build Commands:</strong> {values.buildCommands}</p>
            <p><strong>Environment Variables:</strong> {values.envVariables}</p>
          </ReviewContainer>
          <button type="submit">Submit All</button>
        </Form>
      )}
    </Formik>
  );
};

export default Step4;
