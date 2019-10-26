import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen.jsx';

const App = ({arrDescriptions}) => {
  return <MainScreen
    arrDescriptions={arrDescriptions}
  />;
};

App.propTypes = {
  arrDescriptions: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
