import React from 'react';
import MainScreen from '../main-screen/main-screen.jsx';

const App = (data) => {
  const {arrDescriptions} = data;
  return <MainScreen
    arrDescriptions={arrDescriptions}
  />;
};

export default App;
