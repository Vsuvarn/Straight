import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import Navigation from './Navigation'
import videoReducer from './Redux/Redux/videoReducer';

const store = configureStore({
  reducer: {
    //multiple reducer
    videoReducer
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
