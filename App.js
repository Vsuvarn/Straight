import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import Navigation from './Navigation'
import infoReducer from './Redux/Redux/authReducer';

const store = configureStore({
  reducer: {
    //multiple reducer
    infoReducer
  },
});
function App() {
  return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
  );
}

export default App;
