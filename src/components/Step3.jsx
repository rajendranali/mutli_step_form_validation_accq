import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { setCompletedStep, setStep3 } from '../Redux/action/action';
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

const Step3 = () => {
  const dispatch = useDispatch();
  const step3 = useSelector((state) => state.form.step3);

  const handlePrevious = () => {
    dispatch({ type: 'PREVIOUS_STEP' });
  };

  return (
    <div>
      <h2>Build Settings</h2>
      <Formik
        initialValues={step3}
        validationSchema={Yup.object({
          buildCommands: Yup.string().required('Build commands are required'),
          envVariables: Yup.string().required('Environment variables are required'),
        })}
        onSubmit={(values) => {
          dispatch(setStep3(values));
          dispatch(setCompletedStep(3));
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
          <SubmitButton type="button" onClick={handlePrevious}>Previous</SubmitButton>
          <SubmitButton type="submit">Next</SubmitButton>
        </Form>
      </Formik>
    </div>
  );
};

export default Step3;
