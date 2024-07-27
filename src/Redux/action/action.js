export const setStep1 = (step1Data) => ({
  type: "SET_STEP1",
  payload: step1Data,
});

export const setStep2 = (step2Data) => ({
  type: "SET_STEP2",
  payload: step2Data,
});

export const setStep3 = (step3Data) => ({
  type: "SET_STEP3",
  payload: step3Data,
});

export const setCurrentStep = (step) => ({
  type: "SET_CURRENT_STEP",
  payload: step,
});
export const setCompletedStep = (step) => ({
  type: "SET_COMPLETED_STEP",
  payload: step,
});
export const SAVE_FORM_DATA = "SAVE_FORM_DATA";

export const saveFormData = (formData) => ({
  type: SAVE_FORM_DATA,
  payload: formData,
});
