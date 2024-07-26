// src/components/BuildSettings.js
import React from 'react';
import { useForm } from 'react-hook-form';

const BuildSettings = ({ nextStep, prevStep, formData, setFormData }) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Build Settings</h2>
      <div>
        <label>Build Commands</label>
        <input name="buildCommands" ref={register({ required: true })} />
        {errors.buildCommands && <span>Build Commands are required</span>}
      </div>
      <div>
        <label>Environment Variables</label>
        <input name="envVariables" ref={register({ required: true })} />
        {errors.envVariables && <span>Environment Variables are required</span>}
      </div>
      <button type="button" onClick={prevStep}>Previous</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default BuildSettings;
