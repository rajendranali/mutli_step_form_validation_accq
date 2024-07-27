
# Multi-Step Form with Validation

This project is a React-based multi-step form application that includes form validation, step navigation, and Redux for state management. The application uses styled-components for styling and Redux Thunk for handling asynchronous operations.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Directory Structure](#directory-structure)
- [Features](#features)
- [Usage](#usage)
- [Redux Setup](#redux-setup)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Learn More](#learn-more)

## Getting Started

Follow these steps to get the application up and running on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (includes npm)
- [Git](https://git-scm.com/) (for version control)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rajendranali/mutli_step_form_validation_accq.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd mutli_step_form_validation_accq
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run the following scripts:

- **Start the development server:**

  ```bash
  npm start
  ```

  Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view it. The page will reload if you make edits.

- **Run tests:**

  ```bash
  npm test
  ```

  Launches the test runner in interactive watch mode. For more information, see the [testing documentation](https://facebook.github.io/create-react-app/docs/running-tests).

- **Build the app for production:**

  ```bash
  npm run build
  ```

  Builds the app for production in the `build` folder. The build is minified, and the filenames include hashes.

- **Eject the build configuration:**

  ```bash
  npm run eject
  ```

  **Note:** This action is irreversible. Ejecting will remove the build dependency and give you full control over the configuration files.

## Directory Structure

```
/src
  /components
    - Sidebar.js
    - Step1.js
    - Step2.js
    - Step3.js
    - Step4.js
  /redux
    /actions
      - action.js
    /reducers
      - reducer.js
    - store.js
  /styles
    - globalStyles.js
  - App.js
  - index.js
```

- **`/components`**: Contains React components for each step of the form and the sidebar.
- **`/redux`**: Includes actions, reducers, and the Redux store configuration.
- **`/styles`**: Styled-components and global styles.
- **`App.js`**: Main application component that sets up routing and includes the sidebar and form.
- **`index.js`**: Entry point for React, where the app is rendered to the DOM.

## Features

- **Multi-Step Form**: Navigate through the form steps using "Next" and "Previous" buttons.
- **Sidebar Navigation**: Track progress with visual indicators for completed steps.
- **Redux State Management**: Manage form state and step completion status using Redux.
- **Styled-Components**: Utilize CSS-in-JS for modern styling.

## Usage

1. **Navigate between steps**: Use the sidebar links to jump to any step or use the "Next" and "Previous" buttons to move through the steps sequentially.
2. **Complete each step**: Fill out the required fields and proceed to the next step.
3. **Review and Submit**: Review all collected information on the final step and submit the form.

## Redux Setup

### Actions

- **`setCurrentStep(step)`**: Sets the current active step.
- **`setCompletedStep(step)`**: Marks a step as completed.

### Reducers

- **`currentStep`**: Manages the current active step.
- **`completedSteps`**: Manages the list of completed steps.

## Deployment

To deploy the application, follow the instructions specific to your chosen hosting service (e.g., Netlify, Vercel, GitHub Pages). Typically, this involves pushing your code to a repository and configuring the deployment settings on the hosting platform.

## Troubleshooting

- **`npm run build` fails to minify**: Refer to the [Create React App troubleshooting guide](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) for solutions.

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Redux documentation](https://redux.js.org/)
- [Styled-components documentation](https://styled-components.com/docs)

