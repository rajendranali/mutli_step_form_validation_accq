import { combineReducers } from "redux";

const initialState = {
  step1: {
    appName: "",
    appDescription: "",
  },
  step2: {
    repoUrl: "",
    branch: "",
  },
  step3: {
    buildCommands: "",
    envVariables: "",
  },
  currentStep: 1,
  completedSteps: [],
  formData:{}
};

const formReducer = (state = initialState, action) => {
    console.log(state,action)
  switch (action.type) {
    case "SET_STEP1":
      return { ...state, step1: action.payload, currentStep: 2 };
    case "SET_STEP2":
      return { ...state, step2: action.payload, currentStep: 3 };
    case "SET_STEP3":
      return { ...state, step3: action.payload, currentStep: 4 };
    case "PREVIOUS_STEP":
      return { ...state, currentStep: state.currentStep - 1 };
    case "SET_CURRENT_STEP":
      return { ...state, currentStep: action.payload };
    case "SET_COMPLETED_STEP":
      return {
        ...state,
       completedSteps: Array.from(new Set([...state?.completedSteps, action.payload])),
      };
      case "SAVE_FORM_DATA":
        return {
          ...state,
          formData: action.payload,
        };
    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
});
