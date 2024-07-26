// src/components/RepositoryConfiguration.js
import React from 'react';
import { useForm } from 'react-hook-form';

const RepositoryConfiguration = ({ nextStep, prevStep, formData, setFormData }) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Repository Configuration</h2>
      <div>
        <label>Repository URL</label>
        <input name="repoUrl" ref={register({ required: true })} />
        {errors.repoUrl && <span>Repository URL is required</span>}
      </div>
      <div>
        <label>Branch</label>
        <input name="branch" ref={register({ required: true })} />
        {errors.branch && <span>Branch is required</span>}
      </div>
      <button type="button" onClick={prevStep}>Previous</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default RepositoryConfiguration;
