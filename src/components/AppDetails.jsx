// src/components/AppDetails.js
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const FormControl = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AppDetails = ({ nextStep, formData, setFormData }) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h2>App Details</h2>
      <FormControl>
        <Label>Name</Label>
        <Input  />
        {/* {errors.name && <span>Name is required</span>} */}
      </FormControl>
      <FormControl>
        <Label>Description</Label>
        <Textarea ></Textarea>
        {/* {errors.description && <span>Description is required</span>} */}
      </FormControl>
      <Button type="submit">Next</Button>
    </FormWrapper>
  );
};

export default AppDetails;
