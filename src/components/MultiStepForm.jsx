// src/components/MultiStepForm.js
import React, { useState } from 'react';
import AppDetails from './AppDetails';
import RepositoryConfiguration from './RepositoryConfiguration';
import BuildSettings from './BuildSettings';
import ReviewAndSubmit from './ReviewAndSubmit';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    repoUrl: '',
    branch: '',
    buildCommands: '',
    envVariables: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form Submitted', formData);
  };

  switch (step) {
    case 1:
      return <AppDetails nextStep={nextStep} formData={formData} setFormData={setFormData} />;
    case 2:
      return <RepositoryConfiguration nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />;
    case 3:
      return <BuildSettings nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />;
    case 4:
      return <ReviewAndSubmit prevStep={prevStep} formData={formData} handleSubmit={handleSubmit} />;
    default:
      return <AppDetails nextStep={nextStep} formData={formData} setFormData={setFormData} />;
  }
};

export default MultiStepForm;
