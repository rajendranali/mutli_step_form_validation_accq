import React from 'react';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const FormField = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.875rem;
`;

const Step1 = () => (
  <div>
    <h2>App Details</h2>
    <Formik
      initialValues={{ appName: '', appDescription: '' }}
      validationSchema={Yup.object({
        appName: Yup.string().required('App name is required'),
        appDescription: Yup.string().required('App description is required'),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <FormField>
          <Label htmlFor="appName">App Name</Label>
          <Input name="appName" type="text" />
          <ErrorMessage name="appName" component={ErrorText} />
        </FormField>
        <FormField>
          <Label htmlFor="appDescription">App Description</Label>
          <Input name="appDescription" type="text" />
          <ErrorMessage name="appDescription" component={ErrorText} />
        </FormField>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default Step1;
