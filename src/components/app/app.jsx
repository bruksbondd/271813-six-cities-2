import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen.jsx';

const App = ({arrOffers, cities}) => {
  return <MainScreen
    arrOffers={arrOffers}
    cities={cities}
  />;
};

App.propTypes = {
  arrOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
