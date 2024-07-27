import React from 'react';
import { Provider } from 'react-redux';
// import { BrowserRouter Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from './components/Sidebar';
import MultiStepForm from './components/MultiStepForm';
import store from './Redux/store';
import Navbar from './components/Navbar';

const AppContainer = styled.div`
  display: flex;
`;

const App = () => (
  <Provider store={store}>
  <Navbar/>
      <AppContainer>
        <Sidebar />
        <MultiStepForm/>
          {/* <Route path="/" element={<MultiStepForm/>} /> */}
     
      </AppContainer>
   
  </Provider>
);

export default App;
