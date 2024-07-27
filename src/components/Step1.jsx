import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { setCompletedStep, setStep1 } from '../Redux/action/action';
import { FaGithub, FaBitbucket, FaGitlab, FaGit, FaCodepen } from 'react-icons/fa';

// Styled components for the form fields
const Container = styled.div`
  max-width: 800px;
  margin: 0 40px; 
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Introduction = styled.div`
  margin-bottom: 30px;
  text-align: left; 
  color: #333;
`;

const Heading = styled.h2`
  font-size: 1.5em;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const FormField = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.875rem;
`;

export const SubmitButton = styled.button`
  padding: 9px 15px;
  border: none;
  border-radius: 4px;
  background-color: #4F1787; 
  color: white; 
  font-size: 1rem;
  cursor: pointer;
  margin-left: 10px; /* Apply margin only to the left side */
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }

  &:active {
    background-color: #004494; /* Even darker blue on active */
    transform: scale(0.98); /* Slightly shrink the button */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(38, 143, 255, 0.5); /* Focus ring */
  }
`;


// New styled components for the options section
const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Wrap items to next line if necessary */
  justify-content: space-between;
  gap: 20px; /* Space between options */
  margin-top: 20px;
  margin-bottom: 20px;
`;

const OptionBox = styled.div`
  flex: 1;
  min-width: 150px; /* Ensure minimum width for better responsiveness */
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  background-color: ${(props) => (props.selected ? '#007bff' : '#fff')};
  color: ${(props) => (props.selected ? '#fff' : '#333')};

  &:hover {
    background-color: ${(props) => (props.selected ? '#0056b3' : '#f0f0f0')};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  svg {
    font-size: 2.5em;
    margin-bottom: 10px;
    color: ${(props) => (props.selected ? '#fff' : '#007bff')}; /* Color icons */
  }
`;

const Step1 = () => {
  const dispatch = useDispatch();
  const step1 = useSelector((state) => state.form.step1);

  // State for selected option
  const [selectedOption, setSelectedOption] = React.useState('');

  return (
    <Container>
      <Introduction>
        <Heading>Welcome to the Deployment App Setup</Heading>
        <Paragraph>
          Please fill out the details of your app and select your preferred version control system. 
          This will help us configure the deployment process for your application efficiently.
        </Paragraph>
      </Introduction>

      <OptionsContainer>
        <OptionBox
          selected={selectedOption === 'github'}
          onClick={() => setSelectedOption('github')}
        >
          <FaGithub />
          GitHub
        </OptionBox>
        <OptionBox
          selected={selectedOption === 'bitbucket'}
          onClick={() => setSelectedOption('bitbucket')}
        >
          <FaBitbucket />
          Bitbucket
        </OptionBox>
        <OptionBox
          selected={selectedOption === 'gitlab'}
          onClick={() => setSelectedOption('gitlab')}
        >
          <FaGitlab />
          GitLab
        </OptionBox>
        <OptionBox
          selected={selectedOption === 'git'}
          onClick={() => setSelectedOption('git')}
        >
          <FaGit />
          Git
        </OptionBox>
        <OptionBox
          selected={selectedOption === 'codepen'}
          onClick={() => setSelectedOption('codepen')}
        >
          <FaCodepen />
          CodePen
        </OptionBox>
      </OptionsContainer>

      <Formik
        initialValues={step1}
        validationSchema={Yup.object({
          appName: Yup.string().required('App name is required'),
          appDescription: Yup.string().required('App description is required'),
        })}
        onSubmit={(values) => {
          dispatch(setStep1(values));
          dispatch(setCompletedStep(1));
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

          <SubmitButton type="submit">Next</SubmitButton>
        </Form>
      </Formik>
    </Container>
  );
};

export default Step1;
