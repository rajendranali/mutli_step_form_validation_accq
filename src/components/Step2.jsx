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

const Step2 = () => (
  <div>
    <h2>Repository Configuration</h2>
    <Formik
      initialValues={{ repoUrl: '', branch: '' }}
      validationSchema={Yup.object({
        repoUrl: Yup.string().url('Invalid URL').required('Repository URL is required'),
        branch: Yup.string().required('Branch is required'),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <FormField>
          <Label htmlFor="repoUrl">Repository URL</Label>
          <Input name="repoUrl" type="url" />
          <ErrorMessage name="repoUrl" component={ErrorText} />
        </FormField>
        <FormField>
          <Label htmlFor="branch">Branch</Label>
          <Input name="branch" type="text" />
          <ErrorMessage name="branch" component={ErrorText} />
        </FormField>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default Step2;
