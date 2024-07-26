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

const Step3 = () => (
  <div>
    <h2>Build Settings</h2>
    <Formik
      initialValues={{ buildCommands: '', envVariables: '' }}
      validationSchema={Yup.object({
        buildCommands: Yup.string().required('Build commands are required'),
        envVariables: Yup.string(),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <FormField>
          <Label htmlFor="buildCommands">Build Commands</Label>
          <Input name="buildCommands" type="text" />
          <ErrorMessage name="buildCommands" component={ErrorText} />
        </FormField>
        <FormField>
          <Label htmlFor="envVariables">Environment Variables</Label>
          <Input name="envVariables" type="text" />
          <ErrorMessage name="envVariables" component={ErrorText} />
        </FormField>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default Step3;
