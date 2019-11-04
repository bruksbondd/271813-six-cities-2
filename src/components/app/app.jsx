import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen.jsx';

const App = ({arrOffers}) => {
  return <MainScreen
    arrOffers={arrOffers}
  />;
};

App.propTypes = {
  arrOffers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;
