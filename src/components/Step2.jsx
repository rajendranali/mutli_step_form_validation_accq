import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { setCompletedStep, setStep2 } from '../Redux/action/action';
import { SubmitButton } from './Step1';


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

const Step2 = () => {
  const dispatch = useDispatch();
  const step2 = useSelector((state) => state.form.step2);

  const handlePrevious = () => {
    dispatch({ type: 'PREVIOUS_STEP' });
  };

  return (
    <div>
      <h2>Repository Configuration</h2>
      <Formik
        initialValues={step2}
        validationSchema={Yup.object({
          repoUrl: Yup.string().url('Invalid URL').required('Repository URL is required'),
          branch: Yup.string().required('Branch is required'),
        })}
        onSubmit={(values) => {
          dispatch(setStep2(values));
          dispatch(setCompletedStep(2));
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
          <SubmitButton type="button" onClick={handlePrevious}>Previous</SubmitButton>
          <SubmitButton type="submit">Next</SubmitButton>
        </Form>
      </Formik>
    </div>
  );
};

export default Step2;
