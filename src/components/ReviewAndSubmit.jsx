// src/components/ReviewAndSubmit.js
import React from 'react';

const ReviewAndSubmit = ({ prevStep, formData, handleSubmit }) => {
  return (
    <div>
      <h2>Review and Submit</h2>
      <div>
        <h3>App Details</h3>
        <p>Name: {formData.name}</p>
        <p>Description: {formData.description}</p>
      </div>
      <div>
        <h3>Repository Configuration</h3>
        <p>Repository URL: {formData.repoUrl}</p>
        <p>Branch: {formData.branch}</p>
      </div>
      <div>
        <h3>Build Settings</h3>
        <p>Build Commands: {formData.buildCommands}</p>
        <p>Environment Variables: {formData.envVariables}</p>
      </div>
      <button type="button" onClick={prevStep}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ReviewAndSubmit;
