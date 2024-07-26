import React from 'react';

import styled from 'styled-components';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MultiStepForm from './components/MultiStepForm';
import GlobalStyle from './GlobalStyle';

const AppContainer = styled.div`
  display: flex;
  height: 100%;
`;

const App = () => {
  return(
 <>
    <GlobalStyle />
    <Navbar />
    <AppContainer>
      <Sidebar />
      
      <MultiStepForm/>
    </AppContainer>
 </>
  )
}

export default App;


